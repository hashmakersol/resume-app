const express = require("express");

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

    Resume.findOne({ handle: req.params.handle })
      .populate("Users", ["name", "avatar"])
      .then((reume) => {
        if (!resume) {
          errors.noresume = "There is no profile for this user";
          res.status(400).json(errors);
        }

        res.json(resume);
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
