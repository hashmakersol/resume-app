// const Resume = require("../models/resumeModel");
// const User = require("../models/userModel");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
// const passsport = require("passport");

// const validateProfileInput = require("../validation/profile");
// const validateExperienceInput = require("../validation/experience");
// const validateEducationInput = require("../validation/education");

// const resumeCtrl = {
//   // get all Resume publicaly
//   getAllResume: async (req, res) => {
//     try {
//       //   const resume = Resume.find().populate("user", ["name", "avatr"]);
//       const resume = await Resume.find();
//       if (!resume) {
//         return res.status(400).json({ msg: "There are no profiles" });
//       }
//       res.json(resume);
//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }
//   },
//   // Get user profile resume
//   getResume: async (req, res) => {
//     try {
//       const user = await Resume.findOne({ user: req.user.id });
//       if (!user) {
//         return res
//           .status(400)
//           .json({ msg: "There is no profile for this user." });
//       }
//       res.json(user);
//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }
//   },
//   getResumeById: async (req, res) => {
//     try {
//       const user = await Resume.findOne({ user: req.params.user_id });
//       if (!user) {
//         return res
//           .status(400)
//           .json({ msg: "There is no profile for this user" });
//       }
//       res.json(user);
//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }
//   },
//   addResume: async (req, res) => {
//     try {
//       const { errors, isValid } = validateProfileInput(req.body);
//       if (!isValid) {
//         return res.status(400).json(errors);
//       }
//       //Get fields
//       const profileFields = {};
//       profileFields.user = req.user.id;
//       if (req.body.company) profileFields.company = req.body.company;
//       if (req.body.website) profileFields.website = req.body.website;
//       if (req.body.location) profileFields.location = req.body.location;
//       if (req.body.bio) profileFields.bio = req.body.bio;
//       if (req.body.status) profileFields.status = req.body.status;
//       if (req.body.githubusername)
//         profileFields.githubusername = req.body.githubusername;

//       //Skills - Split into array
//       if (typeof req.body.skills !== "undefined") {
//         profileFields.skills = req.body.skills.split(",");
//       }

//       //Social
//       profileFields.social = {};
//       if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
//       if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
//       if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
//       if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;

//       const profile = await Resume.findOne({ user: req.user.id });
//       if (profile) {
//         Resume.findOneAndUpdate(
//           { user: req.user.id },
//           { $set: profileFields },
//           { new: true }
//         );
//         return res.json(profile);
//       }
//       await new Resume(profileFields).save();
//       res.json(profile);
//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }
//   },
//   addExprience: async (req, res) => {
//     try {
//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }
//   },
//   addEducation: async (req, res) => {
//     try {
//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }
//   },
//   deleteExprience: async (req, res) => {
//     try {
//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }
//   },
//   deleteEduaction: async (req, res) => {
//     try {
//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }
//   },
//   deleteProfile: async (req, res) => {
//     try {
//       Resume.findOneAndDelete({ user: req.user.id });
//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }
//   },
// };

// module.exports = resumeCtrl;
