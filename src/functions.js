const data = {
   unix: "",
   utc: ""
}

const error = {
   err: "" 
}

const check = (Date) => {
   try {
    const date = new Date(Date)
     data.unix = date.getTime()
     data.utc = date.toUTCString()
     return data
   } 
  catch(e) {
      error.err = e
    return error
  }
}

