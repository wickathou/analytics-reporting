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

export default returnStatus;