
//promise based
function asyncTask(){
  return functionA()
    .then((valueA) => functionB(valueA))
    .then((valueB) => functionC(valueB))
    .then((valueB) => functionD(valueC))
    .catch((err) => logger.error(err))
}


//async await
async function asyncTask(){
  try{
    const valueA = await functionA()
    const valueB = await functionB(valueA)
    const valuC = await functionC(valueB)
    return await functionD(valueC)
  } catch(err){}
  logger.error(err)
}