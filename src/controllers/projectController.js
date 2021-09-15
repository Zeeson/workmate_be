import Project from '../models/projectModel';

export const getProjects = (req, res, next) => {
    Project.find()
    .then((projects) => {
        res.status(200).json({
            message: 'all projects',
            projects
        })
    })
    .catch(err => {
        res.json(err)
    })

}

export const postProject = (req, res) => {
console.log(req.body)

    const {
        title, type, pages, submissionDate,  subject, content,  attachment 
    } = req.body

    const newProject = new Project({
        title, 
        type, 
        pages, 
        submissionDate, 
        subject, 
        content, 
        attachment
    })

    newProject. save().then((project) => {
        return res.status(200).json({
            message: 'Submission is succesfful',
            project
        })
    }).catch((err) => {
        res.json("ERROR", err)
    })

}

export const showProject = (req, res, next) => {
    Project.findById(req.params.id).then(project =>{
        res.status(200).json(project)
    }).catch(err => {
        res.status(400).json(err)
    })
}

export const editProject = (req, res, next) => {
    Project.findById(req.params.id, (err, foundProject) =>{
        if(err){
            res.json(err)
        } else{
            res.status(200).json(foundProject)
        }
    })
}

export const updateProject = (req, res) => {
    const {title, type, pages, submissionDate,  subject, content,  attachment 
    } = req.body

    Project.findById(req.params.id).then(project => {
        project.title = title
        project.type = type
        project.pages = pages
        project.submissionDate = submissionDate
        project.subject = subject
        project.content = content
        project.attachment = attachment

        project.save().then((updatedProject) => { 
            res.status(200).json(updatedProject)
        })
    }).catch(err => {
        res.status(400).json(err)
    })
}

export const deleteProject = (req, res,next) => {
    Project.findByIdAndRemove(req.params.id).then(() => {
        res.status(200).json("Project Deleted")
    }).catch(err => {
        res.status(400).json(err)
    })
}