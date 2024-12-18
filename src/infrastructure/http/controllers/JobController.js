class JobController {
    jobPage(req, res, next) {
        res.render("job");
    } 
}

module.exports = new JobController();