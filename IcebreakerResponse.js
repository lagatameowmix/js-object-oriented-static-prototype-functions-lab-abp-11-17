function IcebreakerResponse(email){
  this.email = email
}

Icebreaker.BatchCreate = function(emails){
  return emails.map(function(){
    return new IcebreakerResponse(emails)
  })
}
