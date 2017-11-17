function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails){
  return emails.map(function(){
    return new IcebreakerResponse(emails)
  })
}