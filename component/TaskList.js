import {Accordion} from "@chakra-ui/react"

import TaskListItem from "./TaskListItem";


const TaskList = (props) => {
    const { taskList, handleCompleted } = props;


    return <Accordion allowToggle>
        {taskList.map((task) => {
            return <TaskListItem key={task.name} task={task}/>
        })}
    </Accordion>

}

export default TaskList