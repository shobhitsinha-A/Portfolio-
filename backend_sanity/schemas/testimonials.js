export default {
    name: 'testimonials',
    title:'Testimonials',
    type:'document',
    fields:[
    {
        name: 'name',
        title : 'Name',
        type: 'string'
    }, 
    {
        name: 'company',
        title : 'Company',
        type: 'string'
    }, 
    {
        name: 'imageurl',
        title : 'ImgURL',
        type: 'image',
        options: {
            hotspot: true //user will have the option to crop will uploading image 
        }
    }, 
    {
        name: 'feedback',
        title : 'Feedback',
        type: 'string'
    }
    ]
}