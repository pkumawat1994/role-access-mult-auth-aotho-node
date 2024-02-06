baseURL-http://localhost/3040/api/user
end point- 
1) add User url ---- "/add-user" parameter (formData) - (profilePic:"imageXYZetc",name:"abcd", email:"abcd@gmail.com", mobile:"9958744547", password:"admin@123" ) ;
2) login page  url----/login-user parameter- (email,password)
3) get All User  page url----/get-user parameter - (token in header when got login time giving me as a response)
4) delete User page url----/delete-user/:id parameter - (token in header when got login time giving me as a response , id in URL )
5) update User page url ----/update-user/:id parameter - (token in header , id in url,data in body (name,email,mobile,password,roleType,profilePic)
6) get Single User url ----/get-single-user/:id parameter - (token in header .id in url )
7) forgot Password url ----/forgot-password parameter - (email :"a@gmail.com)in body
8) reset Password url ----/reset-password parameter - (tokenForReset:"give Token when giving response forgot password,newPassword:"123456789") in body data ;
.env file -------
PORT=3040
JWT_SECREAT=abcdef
