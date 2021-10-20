//npm packages
const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');

// generating page
const generatePg = require('./src/page-template');
const displayPg = require(__dirname, "dist");
const indexPath = path.join(displayPg, 'index.html')

//importing classes
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");


// all employees data storage
const teamArray = [];



/**
 * collect an array of team members
 * inquire who is the manager?
 * create manager object
 * push to array of team members
 * inquire if they would like to add new team member
 * 
 * if they choose no then create our team page with all members in the array
 * 
 * if they choose yes then inquire what type of member they would like to add?
 * 
 * if they choose engineer then inquire all data for engineer
 * create engineer object
 * push to array of team members
 * inquire if they would like to add new team member
 * 
 * if they choose intern then inquire all data for intern
 * create intern object
 * push to array of team members
 * inquire if they would like to add new team member
 * 
 */