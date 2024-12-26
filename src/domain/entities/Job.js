const getDateOnly = require("../../shared/utils/getDateOnly");

class Job {
  constructor({
    id,
    title,
    description,
    location,
    image,
    startDate,
    endDate,
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.location = location;
    this.image = image;
    this.startDate = getDateOnly(startDate);
    this.endDate = getDateOnly(endDate);
  }
}

module.exports = Job;
