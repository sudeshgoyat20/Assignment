import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//import { Papa } from 'ngx-papaparse';
import {Observable,of, from } from 'rxjs';
// import { google } from '@google/maps';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
declare var google: any

@Injectable({
  providedIn: 'root'
})


export class LocalStorageService {
  userToken;
  hideSpinner;
  userTokenLog=''
 // private chapterDataSource = new BehaviorSubject("default message");
 // currentChapterInfo = this.chapterDataSource.asObservable();
  
  public platform: any;
  public geocoder: any;
  constructor(private http: HttpClient,
   // private papa: Papa
    ) {
    
  }
  
  getlanlat2(address: string): Observable<any> {
    // console.log('Getting address: ', address);
    let geocoder = new google.maps.Geocoder();
    return Observable.create(observer => {
      geocoder.geocode({
        'address': address
      }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          observer.next(results[0].geometry.location);
          observer.complete();
        } else {
          observer.error();
        }
      });
    });
  }
 // public getlanlat3(address):Observable<any> {
    // let geocoder = new google.maps.Geocoder();
    // geocoder.geocode({
    //   'address': address
    // }, (results, status) => {
    //   // if (status == google.maps.GeocoderStatus.OK) {
    //   //   observer.next(results[0].geometry.location);
    //   //   console.log("observer is",observer);
    //   // } else {
    //   //   console.log('Error: ', results, ' & Status: ', status);
    //   // }
    //  // this.chapterDataSource.next(JSON.stringify(results))
    // //  return this.currentChapterInfo;
    // });
    // return this.currentChapterInfo;
 // }
  public getlanlat(address) {
    // console.log('Getting address: ', address);
    let geocoder = new google.maps.Geocoder();
    return new Promise((resolve,reject)=>{
      geocoder.geocode({
        'address': address
      }, (results, status) => {
        // if (status == google.maps.GeocoderStatus.OK) {
        //   observer.next(results[0].geometry.location);
        //   console.log("observer is",observer);
        // } else {
        //   console.log('Error: ', results, ' & Status: ', status);
        // }
        // callback(results);
        resolve(results)
      });
    })
  }
  // public getlanlat(query: string) {
  //   return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + 
  //   query + '&key=AIzaSyBX5asda8UQ5RRjb0zSl9kGXRw_4F7532s');
  // }
  
  
  setUserToken(token){  
    console.log('set token',token)
    window.localStorage.setItem("userToken",token);
  }
  
  getUserToken(){
    return window.localStorage.getItem("userToken");
  }
  
  setUserID(userId){  
    window.localStorage.setItem("userId",userId);
  }
  
  getUserID(){
    return window.localStorage.getItem("userId");
  }
  
  setUserName(username){  
    window.localStorage.setItem("userName",username);
  }
  
  getUserName(){
    return window.localStorage.getItem("userName");
  }
  
  setUserPermissionsData(userPermissions){
    window.localStorage.setItem("userPermissions",JSON.stringify(userPermissions));
  }
  
  getUserPermissionsData(){
    return window.localStorage.getItem("userPermissions");
  }
  
  setName(name){  
    window.localStorage.setItem("name",name);
  }
  
  getName(){
    return window.localStorage.getItem("name");
  }
  
  setFirstNameAndLastName(names){  
    window.localStorage.setItem("firstNameAndLastName",JSON.stringify(names));
  }
  
  getFirstNameAndLastName(){
    return window.localStorage.getItem("firstNameAndLastName");
  }
  
  setContact(contact){  
    window.localStorage.setItem("contact",contact);
  }
  
  getContact(){
    return window.localStorage.getItem("contact");
  }
  
  setRole(role){  
    window.localStorage.setItem("role",role);
  }
  
  getRole(){
    return window.localStorage.getItem("role");
  }
  
  deleteToken(){
    localStorage.removeItem("userToken");
  }
  
  login(params) {
    return this.http.post("/loginAdmin",params);
  }
  
  signup(params) {
    return this.http.post("/signup",params);
  }
  logout(){
    return this.http.post("/logout",null);
  }
  forgotPassword(params){
    return this.http.post("/forgotPasswordForAdmin",params);
  }
  
  checkResetPasswordToken(params){
    return this.http.post("/checkResetPasswordToken",params);
  }
  
  createJob(params){
    return this.http.post("/createJob",params);
  }
  
  createJobForAdmin(params){
    return this.http.post("/createJobForAdmin",params);
  }
  
  getJobsForAdmin(params){
    return this.http.post("/getJobsForAdmin",params);
  }
  
  editJob(params){
    return this.http.post("/editJob",params);
  }
  
  approveJob(params){
    return this.http.post("/approveJob",params);
  }
  
  disApproveJob(params){
    return this.http.post("/disApproveJob",params);
  }
  
  deleteJob(params){
    return this.http.post("/deleteJob",params);
  }
  setJobDataForEdit(jobData){  
    window.localStorage.setItem("jobData",JSON.stringify(jobData));
  }
  
  getJobDataForEdit(){
    return window.localStorage.getItem("jobData");
  }
  
  createAccommodation(params){
    return this.http.post("/createAccommodation",params);
  }
  
  createAccommodationForAdmin(params){
    return this.http.post("/createAccommodationForAdmin",params);
  } 
  getAccommodationsForAdmin(params){
    return this.http.post("/getAccommodationsForAdmin",params);
  }
  
  deleteAccommodation(params){
    return this.http.post("/deleteAccommodation",params);
  }
  approveAccommodation(params){
    return this.http.post("/approveAccommodation",params);
  }
  
  disApproveAccommodation(params){
    return this.http.post("/disApproveAccommodation",params);
  }
  
  setAccommodationDataForEdit(accommodationData){  
    window.localStorage.setItem("accommodationData",JSON.stringify(accommodationData));
  }
  
  getAccommodationDataForEdit(){
    return window.localStorage.getItem("accommodationData");
  }
  
  editAccommodation(params){
    return this.http.post("/editAccommodation",params);
  }
  
  deleteLocalData(key){
    localStorage.removeItem(key);
  }
  
  getBaseUrl(){
    return location.origin;
  }
  
  getAddress(address){
    var jobAddress = new Array(7);
    console.log("address is",address);
    jobAddress[5] = address["formatted_address"];
    let latlngArray = Object.values(address.geometry.viewport);
    let lat = Object.values(latlngArray[0]);
    let lng = Object.values(latlngArray[1]);
    // if(address.geometry.viewport.ha && address.geometry.viewport.ha["g"]){
    //   jobAddress[8] = address.geometry.viewport.ha["g"];
    // }
    // else if(address.geometry.viewport.ja && address.geometry.viewport.ja["g"]){
    //   jobAddress[8] = address.geometry.viewport.ja["g"];
    // }
    // else if(address.geometry.viewport.ka && address.geometry.viewport.ka["g"]){
    //   jobAddress[8] = address.geometry.viewport.ka["g"];
    // }
    if(lng[0]){
      jobAddress[8] = lng[0];
    }
    else{
      jobAddress[8] = 0;
    }
    // if(address.geometry.viewport.da && address.geometry.viewport.da["g"]){
    //   jobAddress[7] = address.geometry.viewport.da["g"];
    // }
    // else if(address.geometry.viewport.na && address.geometry.viewport.na["g"]){
    //   jobAddress[7] = address.geometry.viewport.na["g"];
    // }
    // else if(address.geometry.viewport.oa && address.geometry.viewport.oa["g"]){
    //   jobAddress[7] = address.geometry.viewport.oa["g"];
    // }
    if(lat[0]){
      jobAddress[7] = lat[0];
    }
    else{
      jobAddress[7] = 0;
    }
    address = address["address_components"];
    address.forEach(function(adrs){
      var types = adrs["types"][0];
      switch(types) {
        case "street_number" :
        jobAddress[0] = adrs
        break;
        case "route" :
        jobAddress[1]=adrs
        break;
        case "sublocality_level_1" :
        jobAddress[2]=adrs
        break; 
        case "administrative_area_level_1" :
        jobAddress[3]=adrs
        break; 
        case "postal_code" :
        jobAddress[4]=adrs
        break;
        case "country" :
        jobAddress[6]=adrs
        break; 
      }
    });
    return jobAddress;
    
  }
  
  createBusinessDirectory(params){
    return this.http.post("/createBusinessDirectoryForAdmin",params);
  }
  
  getBusinessDirectoryData(params){
    return this.http.post("/getBusinessDirectoryDataForAdmin",params);
  }
  
  resetPassword(params){
    return this.http.post("/resetPassword",params);
  }
  
  createCBODirectory(params){
    return this.http.post("/createCBODirectoryForAdmin",params);
  }
  
  getCBODirectoryData(params){
    return this.http.post("/getCBODirectoryDataForAdmin",params);
  }
  
  createMediaDirectory(params){
    return this.http.post("/createMediaDirectoryForAdmin",params);
  }
  
  getMediaDirectoryData(params){
    return this.http.post("/getMediaDirectoryDataForAdmin",params);
  }
  
  createPriestDirectory(params){
    return this.http.post("/createPriestDirectoryForAdmin",params);
  }
  getPriestDirectoryData(params){
    return this.http.post("/getPriestDirectoryDataForAdmin",params);
  }
  
  createHinduTempleDirectory(params){
    return this.http.post("/createHinduTempleDirectoryForAdmin",params);
  }
  getHinduTempleDirectoryData(params){
    return this.http.post("/getHinduTempleDirectoryDataForAdmin",params);
  }
  
  
  editCBODirectory(params){
    return this.http.post("/editCBODirectory",params);
  }
  
  editMediaDirectory(params){
    return this.http.post("/editMediaDirectory",params);
  }
  
  editBusinessDirectory(params){
    return this.http.post("/editBusinessDirectory",params);
  }
  
  editPriestDirectory(params){
    return this.http.post("/editPriestDirectory",params);
  }
  
  editHinduTempleDirectory(params){
    return this.http.post("/editHinduTempleDirectory",params);
  }
  deleteCBODirectory(params){
    return this.http.post("/deleteCBODirectory",params);
  }
  
  deleteMediaDirectory(params){
    return this.http.post("/deleteMediaDirectory",params);
  }
  
  deleteBusinessDirectory(params){
    return this.http.post("/deleteBusinessDirectory",params);
  }
  
  deletePriestDirectory(params){
    return this.http.post("/deletePriestDirectory",params);
  }
  
  deleteHinduTempleDirectory(params){
    return this.http.post("/deleteHinduTempleDirectory",params);
  }
  
  approveCBODirectory(params){
    return this.http.post("/approveCBODirectory",params);
  }
  
  approveMediaDirectory(params){
    return this.http.post("/approveMediaDirectory",params);
  }
  
  approveBusinessDirectory(params){
    return this.http.post("/approveBusinessDirectory",params);
  }
  
  approvePriestDirectory(params){
    return this.http.post("/approvePriestDirectory",params);
  }
  
  approveHinduTempleDirectory(params){
    return this.http.post("/approveHinduTempleDirectory",params);
  }
  disApproveCBODirectory(params){
    return this.http.post("/disApproveCBODirectory",params);
  }
  disApproveMediaDirectory(params){
    return this.http.post("/disApproveMediaDirectory",params);
  }
  
  disApproveHinduTempleDirectory(params){
    return this.http.post("/disApproveHinduTempleDirectory",params);
  }
  disApproveBusinessDirectory(params){
    return this.http.post("/disApproveBusinessDirectory",params);
  }
  
  disApprovePriestDirectory(params){
    return this.http.post("/disApprovePriestDirectory",params);
  }
  
  
  hideCBOContacts(params){
    return this.http.post("/hideCBOContacts",params);
  }
  
  hideMediaContacts(params){
    return this.http.post("/hideMediaContacts",params);
  }
  
  hideBusinessContacts(params){
    return this.http.post("/hideBusinessContacts",params);
  }
  
  hidePriestContacts(params){
    return this.http.post("/hidePriestContacts",params);
  }
  
  hideHinduTempleContacts(params){
    return this.http.post("/hideHinduTempleContacts",params);
  }
  
  showCBOContacts(params){
    return this.http.post("/showCBOContacts",params);
  }
  
  showMediaContacts(params){
    return this.http.post("/showMediaContacts",params);
  }
  
  showBusinessContacts(params){
    return this.http.post("/showBusinessContacts",params);
  }
  
  showPriestContacts(params){
    return this.http.post("/showPriestContacts",params);
  }
  
  showHinduTempleContacts(params){
    return this.http.post("/showHinduTempleContacts",params);
  }
  
  /* Function For Health WellBeing */
  createHealth(params){
    return this.http.post("/createHealth",params);
  }
  
  editHealth(params){
    return this.http.post("/editHealth",params);
  }
  
  deleteHealth(params){
    return this.http.post("/deleteHealth",params);
  }
  
  getHealth(params){
    return this.http.post("/getHealth",params);
  }
  
  /** Functions for embassy **/
  createEmbassy(params){
    return this.http.post("/createEmbassy",params);
  }
  
  editEmbassyAndConsulate(params){
    return this.http.post("/editEmbassyAndConsulate",params);
  }
  
  deleteEmbassyConsulate(params){
    return this.http.post("/deleteEmbassyConsulate",params);
  }
  
  getEmbassyConsulate(params){
    return this.http.post("/getEmbassyConsulate",params);
  }
  
  setEmbassyAndConsulateDataForEdit(mentorMenteeData){  
    window.localStorage.setItem("EmbassyAndConsulateData",JSON.stringify(mentorMenteeData));
  }
  
  getEmbassyAndConsulateDataForEdit(){
    return window.localStorage.getItem("EmbassyAndConsulateData");
  }
  
  getEmbassyAndConsulateDataType(){
    var type = new Array();
    type.push({value:"Embassy"},{value:"Consulate"});
    return ["Embassy","Consulate"];
  }
  
  getBusinessCategories(){
    return this.http.get("/getBusinessCategories");
  }
  
  getCBOCategories(){
    return this.http.get("/getCBOCategories");
  }
  
  getJobTypes(){
    return this.http.get("/getJobTypes");
  }
  
  getCommunities(){
    return this.http.get("/getCommunities");
  }
  
  CSVDatatoObject(files: FileList){
    // console.log("csv file data",files);
    // let file : File = files[0]; 
    // let reader: FileReader = new FileReader();
    // reader.readAsText(file);
    // reader.onload = (e) => {
    //   console.log("readastest",file);
    //   let csv: string = reader.result as string;
    //   console.log("csv is",csv);
    //   callback(this.extractData(csv));
    // }
    return new Promise((resolve,reject)=>{
    //   this.papa.parse(files[0],{
    //     complete: (csv) => {
    //       // callback();
    //       resolve(this.convertCSVToObject(csv.data));
    //     }
    //   });
    })
  }
  
  public extractData(data) { // Input csv data to the function
    let csvData = data;
    let allTextLines = csvData.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');
    let lines = [];
    
    for ( let i = 0; i < allTextLines.length; i++) {
      let data = allTextLines[i].split(',');
      if (data.length == headers.length) {
        let tarr = [];
        for ( let j = 0; j < headers.length; j++) {
          tarr.push(data[j]);
        }
        lines.push(tarr);
      }
    }
    return this.convertCSVToObject(lines);
  }
  
  public convertCSVToObject(lines){
    var ob = {};
    var csvData = [];
    for(var i=1;i<lines.length ;i++){
      for(var j=0;j<lines[0].length ;j++){
        ob[lines[0][j]] = lines[i][j];
      }
      csvData.push(JSON.parse(JSON.stringify(ob)));
    }
    csvData.splice(-1,1);
    return csvData;
  }
  
  createStudentLink(params){
    return this.http.post("/createStudentLink",params);
  }
  
  getStudentsLink(params){
    return this.http.post("/getStudentLink",params);
  }
  
  deleteStudentLink(params){
    return this.http.post("/deleteStudentLink",params);
  }
  editStudentLink(params){
    return this.http.post("/editStudentLink",params);
  }
  
  /** Functions For MentorMentee */
  createMentorMentee(params){
    return this.http.post("/createMentorMenteeForAdmin",params);
  }
  
  editMentorMentee(params){
    return this.http.post("/editMentorMentee",params);
  }
  
  getMentorMenteeDataForAdmin(params){
    return this.http.post("/getMentorMenteeDataForAdmin",params);
  }
  
  deleteMentorMentee(params){
    return this.http.post("/deleteMentorMentee",params);
  }
  
  setMentorMenteeDataForEdit(mentorMenteeData){  
    window.localStorage.setItem("mentorMenteeData",JSON.stringify(mentorMenteeData));
  }
  
  getMentorMenteeDataForEdit(){
    return window.localStorage.getItem("mentorMenteeData");
  }
  
  approveMentorMentee(params){
    return this.http.post("/approveMentorMentee",params);
  }
  disApproveMentorMentee(params){
    return this.http.post("/disApproveMentorMentee",params);
  }
  
  
  /** Functions for News and Events */
  createnewsEvents(params){
    return this.http.post("/createnewsEventsForAdmin",params);
  }
  
  getnewsEventsDataType(){
    var type = new Array();
    type.push({value:"community_events"},{value:"success_stories"},{value:"news"},{value:"articles"});
    return ["Community Events","Success Stories","News","Articles"];
  }
  
  editnewsEvents(params){
    return this.http.post("/editnewsEvents",params);
  }
  
  getnewsEventsDataForAdmin(params){
    return this.http.post("/getnewsEventsDataForAdmin",params);
  }
  
  deletenewsEvents(params){
    return this.http.post("/deletenewsEvents",params);
  }
  
  setnewsEventsDataForEdit(newsEventsData){  
    window.localStorage.setItem("newsEventsData",JSON.stringify(newsEventsData));
  }
  
  getnewsEventsDataForEdit(){
    return window.localStorage.getItem("newsEventsData");
  }
  
  approvenewsEvents(params){
    return this.http.post("/approvenewsEvents",params);
  }
  disApprovenewsEvents(params){
    return this.http.post("/disApprovenewsEvents",params);
  }
  /** End Of Functions for News and Events */
  
  
  /** Functions for Language school - Parent and Kids */
  createLanguageSchool(params){
    return this.http.post("/createLanguageSchoolForAdmin",params);
  }
  
  editLanguageSchool(params){
    return this.http.post("/editLanguageSchool",params);
  }
  
  getLanguageSchoolDataForAdmin(params){
    return this.http.post("/getLanguageSchoolDataForAdmin",params);
  }
  
  deleteLanguageSchool(params){
    return this.http.post("/deleteLanguageSchool",params);
  }
  
  setLanguageSchoolDataForEdit(languageSchoolData){  
    window.localStorage.setItem("languageSchoolData",JSON.stringify(languageSchoolData));
  }
  
  getLanguageSchoolDataForEdit(){
    return window.localStorage.getItem("languageSchoolData");
  }
  
  approveLanguageSchool(params){
    return this.http.post("/approveLanguageSchool",params);
  }
  disApproveLanguageSchool(params){
    return this.http.post("/disApproveLanguageSchool",params);
  }
  /** End Of Functions for Language school - Parent and Kids */
  
  
  /** Functions for Parent and Kids Sports Activities */
  createKidSportsActivities(params){
    return this.http.post("/createKidSportsActivitiesForAdmin",params);
  }
  
  editKidSportsActivities(params){
    return this.http.post("/editKidSportsActivities",params);
  }
  
  getKidSportsActivitiesDataForAdmin(params){
    return this.http.post("/getKidSportsActivitiesDataForAdmin",params);
  }
  
  deleteKidSportsActivities(params){
    return this.http.post("/deleteKidSportsActivities",params);
  }
  
  setKidSportsActivitiesDataForEdit(kidSportsActivitiesData){  
    window.localStorage.setItem("kidSportsActivitiesData",JSON.stringify(kidSportsActivitiesData));
  }
  
  getKidSportsActivitiesDataForEdit(){
    return window.localStorage.getItem("kidSportsActivitiesData");
  }
  
  approveKidSportsActivities(params){
    return this.http.post("/approveKidSportsActivities",params);
  }
  disApproveKidSportsActivities(params){
    return this.http.post("/disApproveKidSportsActivities",params);
  }
  /** End Of Functions for Parent and Kids Sports Activities */
  
  /* Function For Useful Information */
  createUsefulInformation(params){
    return this.http.post("/createUsefulInformation",params);
  }
  
  editUsefulInformation(params){
    return this.http.post("/editUsefulInformation",params);
  }
  
  deleteUsefulInformation(params){
    return this.http.post("/deleteUsefulInformation",params);
  }
  
  getUsefulInformation(params){
    return this.http.post("/getUsefulInformation",params);
  }
  /** End Of Functions for Useful Information */
  
  /** Functions for looking for Jobs*/
  createlookingForJob(params){
    return this.http.post("/createlookingForJob",params);
  }
  
  createlookingForJobForAdmin(params){
    return this.http.post("/createlookingForJobForAdmin",params);
  } 
  
  getlookingForJobForAdmin(params){
    return this.http.post("/getlookingForJobForAdmin",params);
  }
  editlookingForJob(params){
    return this.http.post("/editlookingForJob",params);
  }
  deletelookingForJob(params){
    return this.http.post("/deletelookingForJob",params);
  }
  approvelookingForJob(params){
    return this.http.post("/approvelookingForJob",params);
  }
  disApprovelookingForJob(params){
    return this.http.post("/disApprovelookingForJob",params);
  }
  setlookingForJobDataForEdit(lookJobsData){  
    window.localStorage.setItem("lookJobsData",JSON.stringify(lookJobsData));
  }
  getlookingForJobDataForEdit(){
    return window.localStorage.getItem("lookJobsData");
  }
  
  /** End Of Functions for looking for Jobs */
  
  /** Start Of Functions for looking for Accommodation */
  createlookingForAccommodation(params){
    return this.http.post("/createlookingForAccommodation",params);
  }
  
  createlookingForAccommodationForAdmin(params){
    return this.http.post("/createlookingForAccommodationForAdmin",params);
  } 
  
  getlookingForAccommodationForAdmin(params){
    return this.http.post("/getlookingForAccommodationForAdmin",params);
  }
  editlookingForAccommodation(params){
    return this.http.post("/editlookingForAccommodation",params);
  }
  deletelookingForAccommodation(params){
    return this.http.post("/deletelookingForAccommodation",params);
  }
  approvelookingForAccommodation(params){
    return this.http.post("/approvelookingForAccommodation",params);
  }
  disApprovelookingForAccommodation(params){
    return this.http.post("/disApprovelookingForAccommodation",params);
  }
  setlookingForAccommodationDataForEdit(lookAccommodationData){  
    window.localStorage.setItem("lookAccommodationData",JSON.stringify(lookAccommodationData));
  }
  getlookingForAccommodationDataForEdit(){
    return window.localStorage.getItem("lookAccommodationData");
  }
  /** End Of Functions for looking for Accommodation */
  
  /** Start of the functions for Feedback*/
  
  getFeedback(params){
    return this.http.post("/getFeedback",params);
  }
  
  editFeedback(params){
    return this.http.post("/editFeedback",params);
  }
  
  deleteFeedback(params){
    return this.http.post("/deleteFeedback",params);
  }
  
  approveFeedback(params){
    return this.http.post("/approveFeedback",params);
  }
  
  disApproveFeedback(params){
    return this.http.post("/disApproveFeedback",params);
  }
  setFeedbackDataForEdit(feedbackData){  
    window.localStorage.setItem("feedbackData",JSON.stringify(feedbackData));
  }
  getFeedbackDataForEdit(){
    return window.localStorage.getItem("feedbackData");
  }
  
  /** End of the functions for Feedback*/
  
  
  /* Function For Follow Us */
  createFollowUs(params){
    return this.http.post("/createFollowUs",params);
  }
  
  editFollowUs(params){
    return this.http.post("/editFollowUs",params);
  }
  
  deleteFollowUs(params){ 
    return this.http.post("/deleteFollowUs",params);
  }
  
  getFollowUs(params){
    return this.http.post("/getFollowUs",params);
  }
  /** Links For edit and view */
  
  /* Function For Manage CMS */
  createManageCms(params){
    return this.http.post("/createManageCms",params);
  }
  
  editManageCms(params){
    return this.http.post("/editManageCms",params);
  }
  
  deleteManageCms(params){ 
    return this.http.post("/deleteManageCms",params);
  }
  
  getManageCms(params){
    return this.http.post("/getManageCms",params);
  }
  
  getManageCmsDataForEdit(){
    return window.localStorage.getItem("manageCmsData");
  }
  
  setManageCmsDataForEdit(manageCmsData){  
    window.localStorage.setItem("manageCmsData",JSON.stringify(manageCmsData));
  }
  /** End of Functions for Manage Data*/
  
  /** Links For edit and view */
  
  setBusinessDirectoryDataForEdit(businessData){  
    window.localStorage.setItem("businessData",JSON.stringify(businessData));
  }
  
  getBusinessDirectoryDataForEdit(){
    return window.localStorage.getItem("businessData");
  }
  
  setCBODirectoryForEdit(cboData){  
    window.localStorage.setItem("cboData",JSON.stringify(cboData));
  }
  
  getCBODirectoryForEdit(){
    return window.localStorage.getItem("cboData");
  }
  
  setMediaDirectoryForEdit(mediaData){  
    window.localStorage.setItem("mediaData",JSON.stringify(mediaData));
  }
  
  getMediaDirectoryForEdit(){
    return window.localStorage.getItem("mediaData");
  }
  
  setpriestDirectoryForEdit(priestData){  
    window.localStorage.setItem("priestData",JSON.stringify(priestData));
  }
  getpriestDirectoryForEdit(){
    return window.localStorage.getItem("priestData");
  }
  
  setHinduTempleDirectoryForEdit(hinduTempleData){  
    window.localStorage.setItem("hinduTempleData",JSON.stringify(hinduTempleData));
  }
  getHinduTempleDirectoryForEdit(){
    return window.localStorage.getItem("hinduTempleData");
  }
  getUsers(){
    return this.http.get("/getUsers");
  }
  
  blockUser(params){
    return this.http.post("/blockUser",params);
  }
  
  unBlockUser(params){
    return this.http.post("/unBlockUser",params);
  }
  setUserInfoForView(userData){
    window.localStorage.setItem("userData",JSON.stringify(userData));
  }
  
  getUserInfoForView(){  
    return window.localStorage.getItem("userData");
  }
  
  getSubAdmins(){
    return this.http.get("/getSubAdmins");
  }
  
  createSubAdmin(params){
    return this.http.post("/createSubAdmin",params);
  }
  
  editSubAdmin(params){
    return this.http.post("/editSubAdmin",params);
  }
  
  editProfile(params){
    return this.http.post("/editProfile",params);
  }
  
  setLoginMessage(loginMessage){  
    window.localStorage.setItem("loginMessage",JSON.stringify(loginMessage));
  }
  getLoginMessage(){
    return window.localStorage.getItem("loginMessage");
  }
  
  setDashboardMessage(dashboardMessage){  
    window.localStorage.setItem("dashBoardMessage",dashboardMessage);
  }
  getDashboardMessage(){
    return window.localStorage.getItem("dashBoardMessage");
  }
  deleteLoginMessage(){
    window.localStorage.removeItem("loginMessage");
  }
  deleteDashboardMessage(){
    window.localStorage.removeItem("dashBoardMessage");
  }
  changePassword(params){
    return this.http.post("/changePassword",params);
  }
  getActiveUsersCount(){
    return this.http.get("/getActiveUsersCount");
  }

  getNumberoffeedbacks(){
    return this.http.get("/getNumberoffeedbacks");
  }
  deleteUser(params){
    return this.http.post("/deleteUser",params);
  }

  setThankyouMessage(thankyouMessage){  
    window.localStorage.setItem("thankyouMessage",thankyouMessage);
  }
  getThankyouMessage(){
    return window.localStorage.getItem("thankyouMessage");
  }

  getNavBar(){
    return this.http.get("/getNavBar");
  }
  editNavBar(params){
    return this.http.post("/editNavBar",params);
  }
  createNavBar(params){
    return this.http.post("/createNavBar",params);
  }

  previewUploadedImage(files,callback) {
    if (files.length === 0)
    callback();
    
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      callback({Status:0,Message:"Only Image files are allowed.",fileName:files[0]["name"]}); 
      return ;
    }
    else if (files[0]["size"] >= 5347737.6 ) {
      callback({Status:0,Message:"Please Upload Image with size less than 5 MB",fileName:files[0]["name"]}); 
      return ;
    }
    
    
    var reader = new FileReader();
    // this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      callback({Status:1,ImageURL:reader.result,fileName:files[0]["name"]}); 
    }
  }
}




