const { storagesModel } = require('../model');
const PUBLIC_URL = process.env.PUBLIC_URL;


/** 
*@param {*} req
*@param {*} res
*/

const getItems = async (req, res) => {
    const { body, p } = req;
    // console.log(body);

    // const fileData = {
    //     filename: file.filename,
    //     url:`${PUBLIC_URL}/${file.filename}`
    // };

    const data = await storagesModel({url: {}, filename: {}});
    // res.send({ data });
    // const data = [];
    const a = [];
    const photos = `storage/`;
    console.log(photos);
    res.render('index.html', {title: 'STORAGE', img: data, photo: photos, data: a, p: photos });
};

/** 
*@param {*} req
*@param {*} res
*/
const getItem = (req, res) => {};

/** 
*@param {*} req
*@param {*} res
*/
const createItem = async (req, res) => {

    const { body, file } = req;
    console.log(body);
    const fileData = {
        filename: file.filename,
        url:`${PUBLIC_URL}/${file.filename}`
    }
    const data = await storagesModel.create(fileData);
    const a = [];
    res.render('index.html', {title: 'STORAGE', photo: data, data: a });
};

/** 
*@param {*} req
*@param {*} res
*/
const updateItem = (req, res) => {};

/** 
*@param {*} req
*@param {*} res
*/
const deleteItem = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };