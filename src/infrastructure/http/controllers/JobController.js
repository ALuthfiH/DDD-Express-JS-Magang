const CreateCandidate = require("../../../application/use-cases/candidate/CreateCandidate");
const CreateJob = require("../../../application/use-cases/job/CreateJob");
const DeleteJob = require("../../../application/use-cases/job/deleteJob");
const FindAllJob = require("../../../application/use-cases/job/FindAllJob");
const FindOneJob = require("../../../application/use-cases/job/FindOneJob");
const UpdateOneJob = require("../../../application/use-cases/job/UpdateOneJob");
const CandidateRepositoryImpl = require("../../../domain/repositories/CandidateRepositoryImpl");
const JobRepositoryImpl = require("../../../domain/repositories/JobRepositoryImpl");

const jobRepository = new JobRepositoryImpl();
const candidateRepository = new CandidateRepositoryImpl();

class JobController {
  async index(req, res, next) {
    try {
      const findAllJob = new FindAllJob({ jobRepository });
      const jobs = await findAllJob.execute();
      res.render("layout", { 
        jobs,
        dataTables: { 
          status: true,
          name: "#jobs"
        },
        title: "Lowongan Kerja",
        view: "jobs/index",
        user: req.session.user
      });
    } catch (error) {
      console.log(error);
    }
  }

  createPage(req, res, next) {
    res.render("layout", {
      title: "Buat Lowongan Pekerjaan",
      view: "jobs/create",
      user: req.session.user
    });
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
      res.render("layout", { 
        job,
        title: "Edit Lowongan Pekerjaan",
        view: "jobs/edit",
        user: req.session.user 
      });
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

  async applyListPage(req, res, next){
    try {
      const findAllJob = new FindAllJob({ jobRepository });
      const jobs = await findAllJob.execute();
      res.render("layout", {
        title: "Daftar Lowongan Pekerjaan",
        view: "jobs/job-apply",
        jobs,
        user: req.session.user
      })
    } catch (error) {
      console.log(error);
    }
  }

  async applyDetailPage(req, res, next) {
    try {
      const id = req.params.id;
      const findOneJob = new FindOneJob({ jobRepository });
      const job = await findOneJob.execute(id);
      res.render("layout", {
        title: "Detail Lowongan Pekerjaan",
        view: "jobs/job-apply-detail",
        job,
        user: req.session.user
      })
    } catch (error) {
      console.log(error);
    }
  }

  async applyPage(req, res, next) {
    try {
      const id = req.params.id;
      const findOneJob = new FindOneJob({ jobRepository });
      const job = await findOneJob.execute(id);
      res.render("layout", {
        title: "Formulir Lamaran",
        view: "jobs/job-apply-form",
        job,
        user: req.session.user
      })
    } catch (error) {
      console.log(error);
    }
  }

  async applyCreate(req, res, next) {
    try {
      const jobId = req.params.id;
      const body = req.body;
      const createCandidate = new CreateCandidate({ candidateRepository });
      await createCandidate.execute(jobId, body);
      res.redirect("/jobs/apply/list");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new JobController();
