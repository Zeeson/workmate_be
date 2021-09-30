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
        title, type, content, pages, phoneNumber, email, submissionDate, file
    } = req.body

    const newProject = new Project({
        title, 
        type, 
        content,
        pages, 
        phoneNumber,
        email,
        submissionDate, 
        file,
        userId: req.user['https://api.examplezeeson.com/email']
    })
     // Associate the project entry with the current user
  let userId = req.user['https://api.examplezeeson.com/email'];
  newProject.user_id = userId;
  
   console.log(userId)
   console.log(newProject.user_id)

    newProject.save().then((project) => {
        return res.status(200).json({
            message: 'Submission is succesfful',
            project
        })
    }).catch((err) => {
        res.status(400).json(err)
    })
}

export const getUserProjects = (req, res, next) => {
    let userId = req.user['https://api.examplezeeson.com/email'];
    Project.find({userId})
    .then((projects) => {
        res.status(200).json({
            message: 'user projects',
            projects
        })
    })
    .catch(err => {
        res.json(err)
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
    const {title, type, content, pages, phoneNumber, email, submissionDate, file, 
    } = req.body

    Project.findById(req.params.id).then(project => {
        project.title = title
        project.type = type
        project.pages = pages
        project.submissionDate = submissionDate
        project.phoneNumber = phoneNumber
        project.content = content
        project.email = email
        project.file = file

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