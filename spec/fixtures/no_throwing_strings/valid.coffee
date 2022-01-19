
try
    throw Error 'Something went wrong!'
catch err
    console.log err.name + ': ' + err.message
