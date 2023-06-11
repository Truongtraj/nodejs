import Joi from "joi";

const productSchema = Joi.object({
    name: Joi.string().required().min(5),
    price: Joi.number().required(),
    description: Joi.string()
})

export default productSchema