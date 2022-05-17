const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const validateProfileInput = require("../validation/profile");
const validateExperienceInput = require("../validation/experience");
const validateEducationInput = require("../validation/education");

const Resume = require("../models/resumeModel");
const User = require("../models/userModel");

const resumeCtrl = {
  getUserProfile: async (req, res) => {
    const errors = {};

    Resume.find()
      .populate("Users", ["name", "avatar"])
      .then((profiles) => {
        if (!profiles) {
          error.noprofile = "There are no profiles";
          return res.status(404).json(errors);
        }
        res.json(profiles);
      })
      .catch((err) =>
        res.status(404).json({ profile: "Ther are no profiles" })
      );
  },
  getAllProfiles: async (req, res) => {
    const errors = {};
    Resume.findOne({ user: req.user.id })
      .populate("Users", ["name", "avatar"])
      .then((profile) => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch((err) => res.status(404).json(err));
  },
  getHandle: async (req, res) => {
    const errors = {};

    Profile.findOne({ handle: req.params.handle })
      .populate("Users", ["name", "avatar"])
      .then((profile) => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          res.status(400).json(errors);
        }

        res.json(profile);
      })
      .catch((err) => res.status(404).json(err));
  },
  getProfileById: async (req, res) => {
    const errors = {};

    Resume.findOne({ user: req.params.user_id })
      .populate("Users", ["name", "avatar"])
      .then((profile) => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          res.status(400).json(errors);
        }

        res.json(profile);
      })
      .catch((err) =>
        res.status(404).json({ profile: "There is no profile for this user" })
      );
  },
  createProfile: async (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    //Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    //Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.location) profileFields.location = req.body.location;
    if (req.body.bio) profileFields.bio = req.body.bio;
    if (req.body.status) profileFields.status = req.body.status;

    //Skills - Split into array
    if (typeof req.body.skills !== "undefined") {
      profileFields.skills = req.body.skills.split(",");
    }

    //Social
    profileFields.social = {};
    if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;

    Resume.findOne({ user: req.user.id }).then((profile) => {
      if (profile) {
        //Update
        Resume.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then((profile) => res.json(profile));
      } else {
        //Create

        new Resume(profileFields).save().then((profile) => res.json(profile));
      }
    });
  },
  addExperience: async (req, res) => {
    const { errors, isValid } = validateExperienceInput(req.body);

    //Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Resume.findOne({ user: req.user.id }).then((profile) => {
      const newExp = {
        title: req.body.title,
        company: req.body.company,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description,
      };

      //Add to exp array
      profile.experience.unshift(newExp);

      profile.save().then((profile) => res.json(profile));
    });
  },
  addEducation: async (req, res) => {
    const { errors, isValid } = validateEducationInput(req.body);

    //Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Resume.findOne({ user: req.user.id }).then((profile) => {
      const newEdu = {
        school: req.body.school,
        degree: req.body.degree,
        fieldofstudy: req.body.fieldofstudy,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description,
      };

      //Add to edu array
      profile.education.unshift(newEdu);

      profile.save().then((profile) => res.json(profile));
    });
  },
  deleteExperience: async (req, res) => {
    Resume.findOne({ user: req.user.id })
      .then((profile) => {
        // Get remove index
        const removeIndex = profile.experience
          .map((item) => item.id)
          .indexOf(req.params.exp_id);

        //Splice out of array
        profile.experience.splice(removeIndex, 1);

        //Save
        profile.save().then((profile) => res.json(profile));
      })
      .catch((err) => res.status(404).json(err));
  },
  deleteEducation: async (req, res) => {
    Resume.findOne({ user: req.user.id })
      .then((profile) => {
        // Get remove index
        const removeIndex = profile.education
          .map((item) => item.id)
          .indexOf(req.params.edu_id);

        //Splice out of array
        profile.education.splice(removeIndex, 1);

        //Save
        profile.save().then((profile) => res.json(profile));
      })
      .catch((err) => res.status(404).json(err));
  },
  deleteUser: async (req, res) => {
    Resume.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() =>
        res.json({ success: true })
      );
    });
  },
};
module.exports = resumeCtrl;

// router.get("/all", (req, res) => {
//   const errors = {};

//   Resume.find()
//     .populate("Users", ["name", "avatar"])
//     .then((profiles) => {
//       if (!profiles) {
//         error.noprofile = "There are no profiles";
//         return res.status(404).json(errors);
//       }
//       res.json(profiles);
//     })
//     .catch((err) => res.status(404).json({ profile: "Ther are no profiles" }));
// });

// // @route   GET api/profile
// // @desc    GET current users profile
// // @Access  Private
// router.get("/get", auth, (req, res) => {
//   const errors = {};
//   Resume.findOne({ user: req.user.id })
//     .populate("Users", ["name", "avatar"])
//     .then((profile) => {
//       if (!profile) {
//         errors.noprofile = "There is no profile for this user";
//         return res.status(404).json(errors);
//       }
//       res.json(profile);
//     })
//     .catch((err) => res.status(404).json(err));
// });

// // @route   GET api/profile/handle/:handle
// // @desc    GET profile by handle
// // @Access  Public
// // router.get("/handle/:handle", (req, res) => {
// //   const errors = {};

// //   Profile.findOne({ handle: req.params.handle })
// //     .populate("Users", ["name", "avatar"])
// //     .then((profile) => {
// //       if (!profile) {
// //         errors.noprofile = "There is no profile for this user";
// //         res.status(400).json(errors);
// //       }

// //       res.json(profile);
// //     })
// //     .catch((err) => res.status(404).json(err));
// // });

// // @route   GET api//:user_id
// // @desc    GET profile by userprofile/user ID
// // @Access  Public

// router.get("/user/:user_id", (req, res) => {
//   const errors = {};

//   Resume.findOne({ user: req.params.user_id })
//     .populate("Users", ["name", "avatar"])
//     .then((profile) => {
//       if (!profile) {
//         errors.noprofile = "There is no profile for this user";
//         res.status(400).json(errors);
//       }

//       res.json(profile);
//     })
//     .catch((err) =>
//       res.status(404).json({ profile: "There is no profile for this user" })
//     );
// });

// // @route   POST api/profile
// // @desc    Create or Update user profile
// // @Access  Private
// router.post("/profile", auth, (req, res) => {
//   const { errors, isValid } = validateProfileInput(req.body);

//   //Check Validation
//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

//   //Get fields
//   const profileFields = {};
//   profileFields.user = req.user.id;
//   if (req.body.location) profileFields.location = req.body.location;
//   if (req.body.bio) profileFields.bio = req.body.bio;
//   if (req.body.status) profileFields.status = req.body.status;

//   //Skills - Split into array
//   if (typeof req.body.skills !== "undefined") {
//     profileFields.skills = req.body.skills.split(",");
//   }

//   //Social
//   profileFields.social = {};
//   if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
//   if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
//   if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
//   if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;

//   Resume.findOne({ user: req.user.id }).then((profile) => {
//     if (profile) {
//       //Update
//       Resume.findOneAndUpdate(
//         { user: req.user.id },
//         { $set: profileFields },
//         { new: true }
//       ).then((profile) => res.json(profile));
//     } else {
//       //Create

//       new Resume(profileFields).save().then((profile) => res.json(profile));

//       //   //Check if handle exists
//       //   Profile.findOne({ handle: profileFields.handle }).then((profile) => {
//       //     if (profile) {
//       //       errors.handle = "That handle already exists.";
//       //       res.status(400).json(errors);
//       //     }

//       //     //Save profile
//       //     new Profile(profileFields).save().then((profile) => res.json(profile));
//       //   });
//     }
//   });
// });

// // @route   POST api/profile/experience
// // @desc    POST Add experience to profile
// // @Access  Private
// router.post("/experience", auth, (req, res) => {
//   const { errors, isValid } = validateExperienceInput(req.body);

//   //Check Validation
//   if (!isValid) {
//     return res.status(400).json(errors);
//   }
//   Resume.findOne({ user: req.user.id }).then((profile) => {
//     const newExp = {
//       title: req.body.title,
//       company: req.body.company,
//       from: req.body.from,
//       to: req.body.to,
//       current: req.body.current,
//       description: req.body.description,
//     };

//     //Add to exp array
//     profile.experience.unshift(newExp);

//     profile.save().then((profile) => res.json(profile));
//   });
// });

// // @route   POST api/profile/education
// // @desc    POST Add education to profile
// // @Access  Private
// router.post("/education", auth, (req, res) => {
//   const { errors, isValid } = validateEducationInput(req.body);

//   //Check Validation
//   if (!isValid) {
//     return res.status(400).json(errors);
//   }
//   Resume.findOne({ user: req.user.id }).then((profile) => {
//     const newEdu = {
//       school: req.body.school,
//       degree: req.body.degree,
//       fieldofstudy: req.body.fieldofstudy,
//       from: req.body.from,
//       to: req.body.to,
//       current: req.body.current,
//       description: req.body.description,
//     };

//     //Add to edu array
//     profile.education.unshift(newEdu);

//     profile.save().then((profile) => res.json(profile));
//   });
// });

// // @route   DELETE api/profile/experience/:exp_id
// // @desc    delete experience from profile
// // @Access  Private
// router.delete("/experience/:exp_id", auth, (req, res) => {
//   Resume.findOne({ user: req.user.id })
//     .then((profile) => {
//       // Get remove index
//       const removeIndex = profile.experience
//         .map((item) => item.id)
//         .indexOf(req.params.exp_id);

//       //Splice out of array
//       profile.experience.splice(removeIndex, 1);

//       //Save
//       profile.save().then((profile) => res.json(profile));
//     })
//     .catch((err) => res.status(404).json(err));
// });

// // @route   DELETE api/profile/education/:edu_id
// // @desc    Delete education from profile
// // @Access  Private
// router.delete("/education/:edu_id", auth, (req, res) => {
//   Resume.findOne({ user: req.user.id })
//     .then((profile) => {
//       // Get remove index
//       const removeIndex = profile.education
//         .map((item) => item.id)
//         .indexOf(req.params.edu_id);

//       //Splice out of array
//       profile.education.splice(removeIndex, 1);

//       //Save
//       profile.save().then((profile) => res.json(profile));
//     })
//     .catch((err) => res.status(404).json(err));
// });

// // @route   DELETE api/profile
// // @desc    Delete user and profile
// // @Access  Private
// router.delete("/", auth, (req, res) => {
//   Resume.findOneAndRemove({ user: req.user.id }).then(() => {
//     User.findOneAndRemove({ _id: req.user.id }).then(() =>
//       res.json({ success: true })
//     );
//   });
// });
// module.exports = router;
