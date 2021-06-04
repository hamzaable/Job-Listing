import React, { Component } from "react";
import classes from "./Job.module.css";

class Job extends Component {
  render() {
    return (
      <div className={classes.Job}>
        <div className={classes.image}>
          <img src={"." + this.props.image} alt="" />
        </div>
        <div className={classes.description}>
          <div>
            <span className={classes.company}>{this.props.company} </span>
            <span className={classes.new}>
              {this.props.new ? "NEW" : "OLD"}
            </span>
            <span className={classes.featured}>
              {this.props.featured ? "FEATURED" : "NON-FEATURED"}
            </span>
          </div>
          <div className={classes.position}>{this.props.position}</div>
          <div>
            <span>{this.props.postedAt}</span>
            <span> . {this.props.contract}</span>
            <span> . {this.props.location}</span>
          </div>
        </div>

        <div className={classes.requirements}>
          <div>
            <span className={classes.role} onClick={this.props.RoleFilter}>
              {this.props.role}
            </span>
            <span className={classes.level} onClick={this.props.LevelFilter}>
              {this.props.level}
            </span>
            <span>{this.props.languages}</span>
            <span>{this.props.tools}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Job;
