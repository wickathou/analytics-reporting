const returnStatus = (type, state, action) => {
  switch (type) {
    case 'pending':
      return { ...state, status: { ...state.status, loading: true, error: '' } };
    case 'fulfilled':
      return { ...state, status: { ...state.status, loading: false, error: '' } };
    case 'rejected':
      return { ...state, status: { ...state.status, loading: false, error: action.error.message || 'The operation has failed' } };
    default:
      break;
  }
  return { ...state };
};

export const totalViewCounter = (pageList) => {
  console.log(pageList);
  let totalViewCount = 0;
  pageList.forEach((page) => {
    totalViewCount += page.data.views;
  });
  return totalViewCount;
};

export default returnStatus;
