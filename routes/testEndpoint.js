
/*
 * RENDER test jade file  
 */

exports.display = function(req, res){
  res.render('bigpicture', { title: 'Test Endpoint' });
};