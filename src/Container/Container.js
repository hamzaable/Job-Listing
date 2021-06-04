import React, { Component } from "react";
import classes from "./Container.module.css";
import JobData from "../data/data.json";
import Header from "../Header/Header";
import Job from "../Job/Job";
import ResetButton from "../Job/ResetButton/ResetButton";

class Container extends Component {
  state = {
    rolefilteredJob: null,
    levelfilteredJob: null,
    languagefilteredJob: null,
    toolfilteredJob: null,
    reset: false,
  };

  RoleFilterHandler = (event) => {
    console.log(event.target.innerText);
    this.setState({
      levelfilteredJob: null,
      languagefilteredJob: null,
      toolfilteredJob: null,
      rolefilteredJob: JobData.filter((FilteredPost) => {
        return FilteredPost.role === event.target.innerText.trim();
      }).map((JobPost) => {
        return (
          <Job
            key={JobPost.id}
            image={JobPost.logo}
            company={JobPost.company}
            new={JobPost.new}
            featured={JobPost.featured}
            position={JobPost.position}
            postedAt={JobPost.postedAt}
            contract={JobPost.contract}
            location={JobPost.location}
            role={JobPost.role}
            level={JobPost.level}
            languages={JobPost.languages.map((language) => {
              return (
                <span
                  className={classes.language}
                  onClick={this.LanguageFilterHandler}
                >
                  {language}
                </span>
              );
            })}
            tools={JobPost.tools.map((tool) => {
              return (
                <span className={classes.tool} onClick={this.ToolFilterHandler}>
                  {" "}
                  {tool}{" "}
                </span>
              );
            })}
            RoleFilter={(event) => this.RoleFilterHandler(event)}
            LevelFilter={(event) => this.LevelFilterHandler(event)}
            LanguageFilter={(event) => this.LanguageFilterHandler(event)}
            ToolFilter={(event) => this.ToolFilterHandler(event)}
          />
        );
      }),
      reset: true,
    });
  };

  LevelFilterHandler = (event) => {
    console.log(event.target.innerText);
    this.setState({
      rolefilteredJob: null,
      languagefilteredJob: null,
      toolfilteredJob: null,
      levelfilteredJob: JobData.filter((FilteredPost) => {
        return FilteredPost.level === event.target.innerText.trim();
      }).map((JobPost) => {
        return (
          <Job
            key={JobPost.id}
            image={JobPost.logo}
            company={JobPost.company}
            new={JobPost.new}
            featured={JobPost.featured}
            position={JobPost.position}
            postedAt={JobPost.postedAt}
            contract={JobPost.contract}
            location={JobPost.location}
            role={JobPost.role}
            level={JobPost.level}
            languages={JobPost.languages.map((language) => {
              return (
                <span
                  className={classes.language}
                  onClick={this.LanguageFilterHandler}
                >
                  {language}
                </span>
              );
            })}
            tools={JobPost.tools.map((tool) => {
              return (
                <span className={classes.tool} onClick={this.ToolFilterHandler}>
                  {" "}
                  {tool}{" "}
                </span>
              );
            })}
            RoleFilter={(event) => this.RoleFilterHandler(event)}
            LevelFilter={(event) => this.LevelFilterHandler(event)}
            LanguageFilter={(event) => this.LanguageFilterHandler(event)}
            ToolFilter={(event) => this.ToolFilterHandler(event)}
          />
        );
      }),
      reset: true,
    });
  };

  LanguageFilterHandler = (event) => {
    console.log(event.target.innerText);
    this.setState({
      rolefilteredJob: null,
      levelfilteredJob: null,
      toolfilteredJob: null,
      languagefilteredJob: JobData.filter((FilteredPost) => {
        return FilteredPost.languages.includes(event.target.innerText.trim());
      }).map((JobPost) => {
        return (
          <Job
            key={JobPost.id}
            image={JobPost.logo}
            company={JobPost.company}
            new={JobPost.new}
            featured={JobPost.featured}
            position={JobPost.position}
            postedAt={JobPost.postedAt}
            contract={JobPost.contract}
            location={JobPost.location}
            role={JobPost.role}
            level={JobPost.level}
            languages={JobPost.languages.map((language) => {
              return (
                <span
                  className={classes.language}
                  onClick={this.LanguageFilterHandler}
                >
                  {language}
                </span>
              );
            })}
            tools={JobPost.tools.map((tool) => {
              return (
                <span className={classes.tool} onClick={this.ToolFilterHandler}>
                  {" "}
                  {tool}{" "}
                </span>
              );
            })}
            RoleFilter={(event) => this.RoleFilterHandler(event)}
            LevelFilter={(event) => this.LevelFilterHandler(event)}
            LanguageFilter={(event) => this.LanguageFilterHandler(event)}
            ToolFilter={(event) => this.ToolFilterHandler(event)}
          />
        );
      }),
      reset: true,
    });
  };
  ToolFilterHandler = (event) => {
    console.log(event.target.innerText);
    this.setState({
      rolefilteredJob: null,
      levelfilteredJob: null,
      languagefilteredJob: null,
      toolfilteredJob: JobData.filter((FilteredPost) => {
        return FilteredPost.tools.includes(event.target.innerText.trim());
      }).map((JobPost) => {
        return (
          <Job
            key={JobPost.id}
            image={JobPost.logo}
            company={JobPost.company}
            new={JobPost.new}
            featured={JobPost.featured}
            position={JobPost.position}
            postedAt={JobPost.postedAt}
            contract={JobPost.contract}
            location={JobPost.location}
            role={JobPost.role}
            level={JobPost.level}
            languages={JobPost.languages.map((language) => {
              return (
                <span
                  className={classes.language}
                  onClick={this.LanguageFilterHandler}
                >
                  {language}
                </span>
              );
            })}
            tools={JobPost.tools.map((tool) => {
              return (
                <span className={classes.tool} onClick={this.ToolFilterHandler}>
                  {" "}
                  {tool}{" "}
                </span>
              );
            })}
            RoleFilter={(event) => this.RoleFilterHandler(event)}
            LevelFilter={(event) => this.LevelFilterHandler(event)}
            LanguageFilter={(event) => this.LanguageFilterHandler(event)}
            ToolFilter={(event) => this.ToolFilterHandler(event)}
          />
        );
      }),
      reset: true,
    });
  };

  resetAllHandler = () => {
    this.setState({
      rolefilteredJob: null,
      levelfilteredJob: null,
      languagefilteredJob: null,
      toolfilteredJob: null,
      reset: false,
    });
  };

  render() {
    let job = JobData.map((JobPost) => {
      return (
        <Job
          key={JobPost.id}
          image={JobPost.logo}
          company={JobPost.company}
          new={JobPost.new}
          featured={JobPost.featured}
          position={JobPost.position}
          postedAt={JobPost.postedAt}
          contract={JobPost.contract}
          location={JobPost.location}
          role={JobPost.role}
          level={JobPost.level}
          languages={JobPost.languages.map((language) => {
            return (
              <span
                className={classes.language}
                onClick={this.LanguageFilterHandler}
              >
                {language}
              </span>
            );
          })}
          tools={JobPost.tools.map((tool) => {
            return (
              <span className={classes.tool} onClick={this.ToolFilterHandler}>
                {" "}
                {tool}{" "}
              </span>
            );
          })}
          RoleFilter={(event) => this.RoleFilterHandler(event)}
          LevelFilter={(event) => this.LevelFilterHandler(event)}
          LanguageFilter={(event) => this.LanguageFilterHandler(event)}
          ToolFilter={(event) => this.ToolFilterHandler(event)}
        />
      );
    });
    let resetbtn = null;
    if (this.state.reset) {
      resetbtn = (
        <div className={classes.resetdiv}>
          <ResetButton resetAll={this.resetAllHandler} />
        </div>
      );
    }

    if (this.state.rolefilteredJob) {
      job = this.state.rolefilteredJob;
    }
    if (this.state.levelfilteredJob) {
      job = this.state.levelfilteredJob;
    }
    if (this.state.languagefilteredJob) {
      job = this.state.languagefilteredJob;
    }
    if (this.state.toolfilteredJob) {
      job = this.state.toolfilteredJob;
    }

    return (
      <div className={classes.body}>
        <Header />
        {resetbtn}
        <div className={classes.container}>{job}</div>
      </div>
    );
  }
}
export default Container;
