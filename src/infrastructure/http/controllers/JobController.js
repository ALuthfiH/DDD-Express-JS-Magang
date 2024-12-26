const CreateJob = require("../../../application/use-cases/job/CreateJob");
const DeleteJob = require("../../../application/use-cases/job/deleteJob");
const FindAllJob = require("../../../application/use-cases/job/FindAllJob");
const FindOneJob = require("../../../application/use-cases/job/FindOneJob");
const UpdateOneJob = require("../../../application/use-cases/job/UpdateOneJob");
const JobRepositoryImpl = require("../../../domain/repositories/JobRepositoryImpl");

const jobRepository = new JobRepositoryImpl();

class JobController {
  async index(req, res, next) {
    try {
      const findAllJob = new FindAllJob({ jobRepository });
      const jobs = await findAllJob.execute();
      res.render("job", { jobs });
    } catch (error) {
      console.log(error);
    }
  }

  createPage(req, res, next) {
    res.render("job-create");
  }

  async create(req, res, next) {
    try {
      const jobData = req.body;
      const createJob = new CreateJob({ jobRepository });
      const job = await createJob.execute(jobData);
      res.redirect("/jobs?modal=true&message=Job created successfully");
    } catch (error) {
      console.log(error);
    }
  }

  async updatePage(req, res, next) {
    try {
      const id = req.params.id;
      const findOneJob = new FindOneJob({ jobRepository });
      const job = await findOneJob.execute(id);
      res.render("job-update", { job });
    } catch (error) {
      console.log(error);
    }
  }

  async update(req, res, next) {
    try {
      const id = req.params.id;
      const body = req.body;
      const updateOneJob = new UpdateOneJob({ jobRepository });
      await updateOneJob.execute(id, body);
      res.redirect("/jobs?modal=true&message=Job updated successfully");
    } catch (error) {
      console.log(error);
    }
  }

  async delete(req, res, next){
    try {
        const id = req.params.id;
        const deleteJob = new DeleteJob({ jobRepository });
        await deleteJob.execute(id);
        res.redirect("/jobs");
    } catch (error) {
        console.log(error);
    }
  }
}

module.exports = new JobController();
