const generatePathDesc = (start: string, stop: string) => {
    switch (start) {
        case "Unilag Gate":
            switch (stop) {
                case "Unilag Gate":
                    return "You are the the gate already"
                    break;
                case "Wema Bank":
                    return "Go straight towards Wema Bank"
                    break;
                case "Faculty of Education":
                    return "Turn right and move towards Faculty of Education"
                    break;
            
                default:
                    break;
            }
            break;
        case "Wema bank":
            switch (stop) {
                case "Unilag Gate":
                    return "Go straight towards Unilag Gate"
                    break;
                case "Wema Bank":
                    return "You are at Wema Bank already"
                    break;
                case "Faculty of Education":
                    return "Turn right towards Wema Busstop and move towards Faculty of Education(You will see a passage)"
                    break;
                case "Unilag Sports center":
                    return "Continue straight from Wema Bank towards Unilag Sports center"
                    break;
                case "Faculty of Environmental Sciences":
                    return "Cross to the other side of the road from Wema Bank towards Faculty of Environmental Sciences"
                    break;
            
                default:
                    break;
            }
            break;
        case "Faculty of Education":
            switch (stop) {
                case "Unilag Gate":
                    return "Turn right and move towards Unilag Gate"
                    break;
                case "Wema Bank":
                    return "Turn right towards Wema bustop, you will sea passage. Continue towards Wema Bank."
                    break;
                case "Faculty of Education":
                    return "You are at Faculty of Education already"
                    break;
                case "Staff Quarters":
                    return "Turn left towards Elkanemi Hostel and then move straight towards Staff Quarters."
                    break;
                default:
                    break;
            }
            break;
        case "Unilag Sports center":
            switch (stop) {
                case "Wema Bank":
                    return "Continue straight from Unilag Sports center towards Wema Bank"
                    break;
                case "Unilag Sports center":
                    return "You are at Unilag Sports center already"
                    break;
                case "New hall filling Station":
                    return "Continue straight towards New hall filling Station"
                    break;
                case "Faculty of Environmental Sciences":
                    return "Cross to the other side of the road and move towards Faculty of Environmental Sciences"
                    break;
                default:
                    break;
            }
            break;
        case "New hall filling Station":
            switch (stop) {
                case "Unilag Sports center":
                    return "Continue straight towards Unilag Sports center"
                    break;
                case "New hall filling Station":
                    return "You are at New hall filling Station already"
                    break;
                case "Nithub Unilag":
                    return "Turn right and continue towards Nithub Unilag"
                    break;
                case "New hall":
                    return "Continue straight towards New hall"
                    break;
                default:
                    break;
            }
            break;
        case "Nithub Unilag":
            switch (stop) {
                case "New hall filling Station":
                    return "Turn left and move towards New hall filling Station"
                    break;
                case "Nithub Unilag":
                    return "You are at Nithub Unilag already"
                    break;
                case "Faculty of Social Sciences":
                    return "Continue straight towards Faculty of Social Sciences"
                    break;
                default:
                    break;
            }
            break;
        case "Faculty of Social Sciences":
            switch (stop) {
                case "Nithub Unilag":
                    return "Continue straight towards Nithub Unilag"
                    break;
                case "Faculty of Social Sciences":
                    return "You are at Faculty of Social Sciences already"
                    break;
                case "Unilag DLI":
                    return "Continue straight towards Unilag DLI"
                    break;
                default:
                    break;
            }
            break;
        case "Unilag DLI":
            switch (stop) {
                case "Faculty of Social Sciences":
                    return "Turn right and continue straight towards Faculty of Social Sciences"
                    break;
                case "Unilag DLI":
                    return "You are at Unilag DLI already"
                    break;
                case "Staff Quarters":
                    return "Turn right a bit and continue towards Staff Quarters"
                    break;
                case "Unilag Second Gate":
                    return "Turn left a bit and continue straight towards Unilag Second Gate"
                    break;
                default:
                    break;
            }
            break;
        case "Staff Quarters":
            switch (stop) {
                case "Faculty of Education":
                    return "Turn left and continue, pass Elkanemi Hostel and straight towards Faculty of Education"
                    break;
                case "Staff Quarters":
                    return "You are at Staff Quarters already"
                    break;
                case "Unilag DLI":
                    return "Turn right and continue straight towards Unilag DLI"
                    break;
                default:
                    break;
            }
            break;
        case "Unilag Second Gate":
            switch (stop) {
                case "Unilag DLI":
                    return "Turn left and continue straight towards Unilag DLI"
                    break;
                case "Unilag Second Gate":
                    return "You are at Unilag Second Gate already"
                    break;
                default:
                    break;
            }
            break;
        case "New hall":
            switch (stop) {
                case "New hall filling Station":
                    return "Continue straight towards New hall filling Station"
                    break;
                case "New hall":
                    return "You are at New hall already"
                    break;
                default:
                    break;
            }
            break;
        case "Faculty of Environmental Sciences":
            switch (stop) {
                case "Wema Bank":
                    return "Cross to the other side of the road and move towards Wema Bank"
                    break;
                case "Unilag Sports center":
                    return "Cross to the other side of the road and move towards Unilag Sports center"
                    break;
                default:
                    break;
            }
            break;
        
            
    }

}

export default generatePathDesc
