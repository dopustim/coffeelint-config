
try
    throw 'Something went wrong!'
catch err
    console.log err.name + ': ' + err.message
