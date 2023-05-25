import {ApiManager} from './ApiManager';
import FormData from "form-data";
export const user_login = async data => {
  try {
    console.log(data)
    const result = await ApiManager('/signinMember', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: data,
    });
    return result;
  } catch (error) {
    console.log(error);
    if (error.response && error.response.data) {
      return error.response.data;
    } else {
      // Handle the error when response or response.data is undefined
      return { error: 'An error occurred.' };
    }
  }
};

export const AllInfoUser = async (token) => {
  try {
   
    const result = await ApiManager('/GetAllInfoUser', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
         'Authorization': `Bearer ${token}` 
      }
      
    });
    
    
    return result;
  } catch (error) {
    
    if (error.response && error.response.data) {
      return error.response.data;
    } else {
      // Handle the error when response or response.data is undefined
      return { error: 'An error occurred.' };
    }
  }
};
export const addAmount = async (data,token) => {
  try {
   
    const result = await ApiManager('/addAmount', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
         'Authorization': `Bearer ${token}` 
      },
      data:data
      
    });
    
    
    return result;
  } catch (error) {
    console.log(error)
    if (error.response && error.response.data) {
      return error.response.data;
    } else {
      // Handle the error when response or response.data is undefined
      return { error: 'An error occurred.' };
    }
  }
};
export const verifyEmailExists = async (data) => {
  try {
   
    const result = await ApiManager('/verifyEmailExists', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
         
      },
      data:data
      
    });
    
    
    return result;
  } catch (error) {
    console.log(error)
    if (error.response && error.response.data) {
      return error.response.data;
    } else {
      // Handle the error when response or response.data is undefined
      return { error: 'An error occurred.' };
    }
  }
};

export const childSignup = async (data, token) => {
  try {
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      responseType: 'json',
      
    };
    
    const result = await ApiManager.post('/childSignup',data,config );
    
    return result;
  } catch (error) {
    console.log(error);
    if (error.response && error.response.data) {
      return error.response.data;
    } else {
      console.log(error);
      return { error: 'An error occurred.' };
    }
  }
};

export const SignupMember = async (data) => {
  try {
    
    const config = {
      headers: {
        'Content-Type': 'application/json'
      },
      responseType: 'json',
      
    };
    
    const result = await ApiManager.post('/SignupMember',data,config );
    
    return result;
  } catch (error) {
    console.log(error);
    if (error.response && error.response.data) {
      return error.response.data;
    } else {
      console.log(error);
      return { error: 'An error occurred.' };
    }
  }
};

export const createBracelet = async (data) => {
  try {
    console.log(data)
    const result = await ApiManager('/createBracelet', {
      method: 'POST',
      headers: {
        'content-type': 'application/json' 
      },
      data:data
      
    });
    
    
    return result;
  } catch (error) {
    console.log(error)
    if (error.response && error.response.data) {
      return error.response.data;
    } else {
      console.log('lelelel')
      console.log(error);
      // Handle the error when response or response.data is undefined
      return { error: 'An error occurred.' };
    }
  }
};

export const transfer = async (data,token) => {
  try {
   
    const result = await ApiManager('/transfer', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
         'Authorization': `Bearer ${token}` 
      },
      data:data
      
    });
    
    
    return result;
  } catch (error) {
    console.log(error)
    if (error.response && error.response.data) {
      return error.response.data;
    } else {
      // Handle the error when response or response.data is undefined
      return { error: 'An error occurred.' };
    }
  }
};