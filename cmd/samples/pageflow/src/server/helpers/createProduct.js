import getProduct from './getProduct.js';
import startPageFlowWorkflow from './startPageFlowWorkflow.js';

const createProduct = async ({ cadence, name }) => {
  await startPageFlowWorkflow({ cadence, name });


  // await signalPageWorkflow({
  //   action: 'create',
  //   cadence,
  //   content: '',
  //   workflowExecution,
  // });

  // await waitTime(100);

  const product = await getProduct({ cadence, name });

  console.log('product = ', product);

  return product;



  // console.log('createQueryResponse = ', createQueryResponse);

  // if (createQueryResponse.queryResult.State !== 'created') {
  //   throw new UnexpectedStatusError(queryResponse.queryResult.State);
  // }

  // const product = {
  //   description,
  //   name,
  // };

  // await signalPageWorkflow({
  //   action: 'save',
  //   cadence,
  //   content: JSON.stringify(product),
  //   workflowExecution,
  // });

  // // await waitTime(100);

  // const saveQueryResponse = await queryPageWorkflow({ cadence, workflowExecution });

  // // console.log('saveQueryResponse = ', saveQueryResponse);

  // const cadenceProduct = parseContent(saveQueryResponse.queryResult.Content);
  // cadenceProduct.status = saveQueryResponse.queryResult.State;

  // return cadenceProduct;
};

export default createProduct;
