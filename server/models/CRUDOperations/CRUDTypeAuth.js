const model = require('../TypeAuth')

module.exports = class CRUDTypeAuth
{
    /**
     *
     * @param params object
     * @returns {Promise<boolean>}
     */
    static async createOne(params) {
        return await model.create(params)
    }

    /**
     *
     * @param params objects[]
     * @returns {Promise<boolean>}
     */
    static async createMany(params){
        await model.insertMany(params, (err) => {
            if (err) {
                return false
            }
        })
        return true
    }

    /**
     *
     * @param filter object
     * @returns {Promise<Query<any, any, {}, any>>}
     */
    static async findOne(filter)
    {
        return model.findOne(filter, (err) => {
            if (err) {
                return null
            }
        }).clone();
    }

    /**
     *
     * @param filter object
     * @returns {Promise<Query<any, any, {}, any>>}
     */
    static async findMany(filter)
    {
        return model.find(filter, (err) => {
            if (err) {
                return null
            }
        }).clone();
    }

    /**
     *
     * @param id
     * @returns {Promise<Query<any, any, {}, any>>}
     */
    static async findById(id)
    {
        return model.findById(id, (err) => {
            if (err) {
                return null
            }
        }).clone();
    }

    /**
     *
     * @param $condition
     * @returns {Promise<void>}
     */
    static async delete($condition)
    {
        await model.deleteOne($condition)
        return true;
    }

    static async deleteMany($condition)
    {
        await model.deleteMany($condition)
        return true;
    }
}