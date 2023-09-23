import axios from "axios";
import { toast } from "react-toast";

const environ = () => {
  return "https://backend.getlinked.ai/";
};

export const PLAYURL = environ();

const create = (url, newObject) => {
  return axios
    .post(PLAYURL + url, newObject)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      if (err.response) {
        toast.error(err?.response?.data?.message);
        return err.response;
      } else if (err.request) {
        return err.request;
      } else {
        console.warn(err.message);
      }
      //throw new Error(err.response.data.message);
    });
};

const edit = (url, newObject) => {
  return axios
    .put(PLAYURL + url, newObject)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      if (err.response) {
        toast.error(err?.response?.data?.message);
        return err.response;
      } else if (err.request) {
        return err.request;
      } else {
        console.warn(err.message);
      }
      //throw new Error(err.response.data.message);
    });
};

const patchUp = (url, newObject, id) => {
  return axios
    .patch(PLAYURL + url, newObject)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      if (err.response) {
        toast.error(err?.response?.data?.message);
        return err.response;
      } else if (err.request) {
        return err.request;
      } else {
        console.warn(err.message);
      }
      //throw new Error(err.response.data.message);
    });
};

const getAll = (url, name) => {
  return axios
    .get(PLAYURL + url)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      if (err.response) {
        toast.error(err?.response?.data?.message);
        return err.response;
      } else if (err.request) {
        return err.request;
      } else {
        console.warn(err.message);
      }
      //throw new Error(err.response.data.message);
    });
};

const getById = (url, id, name) => {
  return axios
    .get(PLAYURL + url + "/" + id + "/" + name)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      if (err.response) {
        toast.error(err?.response?.data?.message);
        return err.response;
      } else if (err.request) {
        return err.request;
      } else {
        console.warn(err.message);
      }
      //throw new Error(err.response.data.message);
    });
};

export default {
  create,
  edit,
  getAll,
  getById,
  patchUp,
};
