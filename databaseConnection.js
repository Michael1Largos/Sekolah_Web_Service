const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('sekolah', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const murid = sequelize.define (`murid`, {
    ID:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    Nama:{
        type: DataTypes.TEXT
    },
    Kelas:{
        type: DataTypes.TEXT
    }
}, {
    sequelize,
    tableName: `murid`,
    timestamps: false
});

(async () => {
    // const a = await murid.findAll();
    // console.log(a[0].dataValues);

    const adddb = await murid.create({
        ID:5,
        Nama:`Michael Largos`, 
        Kelas:`XII Perhotelan`
    })

    // await murid.update({Nama:`hoho`}, {
    //     where : {
    //         ID:3
    //     }
    // })

    // await murid.destroy({
    //     where :{
    //         ID:4
    //     }
    // })
})();

