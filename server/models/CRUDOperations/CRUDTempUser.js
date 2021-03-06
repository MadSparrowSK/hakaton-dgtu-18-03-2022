const model = require('../TempUser')

module.exports = class CRUDTempUser
{
    /**
     *
     * @param params object
     * @returns {Promise<boolean>}
     */
    static async createOneUser(params) {
        return await model.create(params)
    }

    /**
     *
     * @param params objects[]
     * @returns {Promise<boolean>}
     */
    static async createManyUser(params){
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
    static async findUser(filter)
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
    static async findManyUser(filter)
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
    static async findUserById(id)
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
    static async deleteUser($condition)
    {
        await model.deleteOne($condition)
        return true;
    }

    static async deleteManyUsers($condition)
    {
        await model.deleteMany($condition)
        return true;
    }
}