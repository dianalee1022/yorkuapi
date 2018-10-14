'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ScholarshipSchema = new Schema ({
    faculty: {
        type: [{
            type: String,
            enum: ['all','ampd','education','environmental studies' ,'glendon','graduate','health','lassonde','laps','osgoode','schulich','science']
        }],
        default: ['All']
    },
    status: {
        type:[{
            type: String,
            enum: ['All','Domestic','International','Refugee']
        }],
        default: ['All']
    },
    timing: {
        type: [{
            type: String,
            enum: ['All','Entrance','Summer','Fall','Winter','Convocation']
        }],
        default: ['All']
    },
    field: {
        type: [{
            type: String,
            enum: ['All','Awards','Bursaries','Scholarships']
        }],
        default: ['All']
    }
});
module.exports = mongoose.model('Scholarships', ScholarshipSchema);
