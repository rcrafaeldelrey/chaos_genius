import {
  ALERTEMAILREQUEST,
  ALERTEMAILSUCCESS,
  ALERTEMAILFAILURE,
  CHANNELSTATUSREQUEST,
  CHANNELSTATUSSUCCESS,
  CHANNERSTATUSFAILURE,
  EDITCHANNELREQUEST,
  EDITCHANNELSUCCESS,
  EDITCHANNELFAILURE,
  EMAIL_META_INFO_REQUEST,
  EMAIL_META_INFO_SUCCESS,
  EMAIL_META_INFO_FAILURE,
  SLACK_META_INFO_REQUEST,
  SLACK_META_INFO_SUCCESS,
  SLACK_META_INFO_FAILURE
} from '../actions/ActionConstants';

const initialState = {
  emailLoading: false,
  emailData: [],
  emailError: false,
  channelStatusLoading: true,
  channelStatusData: [],
  channelStatusError: false,
  editData: [],
  editLoading: false,
  editError: false,
  slackMetaInfoLoading: false,
  slackMetaInfoData: [],
  slackMetaInfoError: false,
  emailMetaInfoLoading: false,
  emailMetaInfoData: [],
  emailMetaInfoError: false
};
export const alert = (state = initialState, action) => {
  switch (action.type) {
    case ALERTEMAILREQUEST: {
      return {
        ...state,
        emailLoading: true,
        emailError: false
      };
    }
    case ALERTEMAILSUCCESS: {
      return {
        ...state,
        emailLoading: false,
        emailData: action.data
      };
    }
    case ALERTEMAILFAILURE: {
      return {
        ...state,
        emailLoading: false,
        emailError: true
      };
    }
    case CHANNELSTATUSREQUEST: {
      return {
        ...state,
        channelStatusLoading: true
      };
    }
    case CHANNELSTATUSSUCCESS: {
      return {
        ...state,
        channelStatusData: action.data,
        channelStatusLoading: false
      };
    }
    case CHANNERSTATUSFAILURE: {
      return {
        ...state,
        channelStatusLoading: false,
        channelStatusError: true
      };
    }
    case EDITCHANNELREQUEST: {
      return {
        ...state,
        editLoading: true
      };
    }
    case EDITCHANNELSUCCESS: {
      return {
        ...state,
        editData: action.data,
        editLoading: false
      };
    }
    case EDITCHANNELFAILURE: {
      return {
        ...state,
        editLoading: false,
        editError: true
      };
    }
    case EMAIL_META_INFO_REQUEST: {
      return {
        ...state,
        emailMetaInfoLoading: true
      };
    }
    case EMAIL_META_INFO_SUCCESS: {
      return {
        ...state,
        emailMetaInfoLoading: false,
        emailMetaInfoData: action.data
      };
    }
    case EMAIL_META_INFO_FAILURE: {
      return {
        ...state,
        emailMetaInfoLoading: false,
        emailMetaInfoError: true
      };
    }
    case SLACK_META_INFO_REQUEST: {
      return {
        ...state,
        slackMetaInfoLoading: true
      };
    }
    case SLACK_META_INFO_SUCCESS: {
      return {
        ...state,
        slackMetaInfoLoading: false,
        slackMetaInfoData: action.data
      };
    }
    case SLACK_META_INFO_FAILURE: {
      return {
        ...state,
        slackMetaInfoLoading: false,
        slackMetaInfoError: true
      };
    }
    case 'RESET_EMAIL_DATA': {
      return {
        ...state,
        emailData: [],
        editData: []
      };
    }
    default:
      return state;
  }
};