const router = require("express").Router();
const resumeCtrl = require("../controllers/resumeCtrl");
const auth = require("../middleware/auth");

router.get("/all", auth, resumeCtrl.getUserProfile);
router.get("/get", auth, resumeCtrl.getAllProfiles);
router.get("/handle/:handle", resumeCtrl.getHandle);
router.get("/user/:user_id", resumeCtrl.getProfileById);
router.post("/profile", auth, resumeCtrl.createProfile);
router.post("/experience", auth, resumeCtrl.addExperience);
router.post("/education", auth, resumeCtrl.addEducation);
router.delete("/exprience/:exp_id", auth, resumeCtrl.deleteExperience);
router.delete("/education/:edu_id", auth, resumeCtrl.deleteEducation);
router.delete("/", auth, resumeCtrl.deleteUser);

module.exports = router;
