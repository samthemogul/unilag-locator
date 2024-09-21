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
        case "Wema Bank":
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
                case "Femi Gbaj. Hostel":
                    return "Turn right and then move past the roundabout straight towards Femi Gbaj. Hostel."
                    break;
                case "Education Garden":
                    return "Turn left, move into the Faculty and move towards Education Garden"
                    break;
                default:
                    break;
            }
            break;
        case "Unilag Sports Center":
            switch (stop) {
                case "Wema Bank":
                    return "Continue straight from Unilag Sports center towards Wema Bank"
                    break;
                case "Unilag Sports center":
                    return "You are at Unilag Sports center already"
                    break;
                case "New Hall Filling Station":
                    return "Continue straight towards New hall filling Station"
                    break;
                case "Faculty of Environmental Sciences":
                    return "Cross to the other side of the road and move towards Faculty of Environmental Sciences"
                    break;
                case "Amphitheatre":
                    return "Turn right and continue straight towards Amphitheatre"
                    break;
                default:
                    break;
            }
            break;
        case "New Hall Filling Station":
            switch (stop) {
                case "Unilag Sports center":
                    return "Continue straight towards Unilag Sports center"
                    break;
                case "New Hall Filling Station":
                    return "You are at New hall filling Station already"
                    break;
                case "Nithub Unilag":
                    return "Turn right and continue towards Nithub Unilag"
                    break;
                case "New Hall":
                    return "Continue straight towards New hall"
                    break;
                case "Amphitheatre":
                    return "Turn right and continue towards Amphitheatre"
                    break;
                case "Access Bank":
                    return "Turn left, cross the road and continue towards Access Bank"
                    break;
                default:
                    break;
            }
            break;
        case "Nithub Unilag":
            switch (stop) {
                case "New Hall Filling Station":
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
                    return "Continue straight and turn left towards Unilag DLI"
                    break;
                case "First Bank":
                    return "Continue straight towards First Bank"
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
                case "First Bank":
                    return "Turn right a bit and continue towards First Bank"
                    break;
                case "Unilag Second Gate":
                    return "Turn left a bit and continue straight towards Unilag Second Gate"
                    break;
                case "Honors Hostel":
                    return "Continue straight towards Honors Hostel"
                    break;
                case "Women's Society Hostel":
                    return "Turn left and continue towards Women's Society Hostel"
                    break;
                case "Unilag Staff School":
                    return "Continue straight and turn right towards Unilag Staff School"
                    break;
                default:
                    break;
            }
            break;
        case "Staff Quarters":
            switch (stop) {
                case "Staff Quarters":
                    return "You are at Staff Quarters already"
                    break;
                case "First Bank":
                    return "Turn right and continue straight towards First Bank"
                    break;
                case "Biobaku Hostel":
                    return "Turn left and continue towards Biobaku Hostel"
                    break;
                case "Amina Hostel":
                    return "Turn right and continue towards Amina Hostel"
                    break;
                case "Kofo Hostel":
                    return "Turn left and continue towards Kofo Hostel"
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
        case "New Hall":
            switch (stop) {
                case "New hall filling Station":
                    return "Continue straight towards New hall filling Station"
                    break;
                case "New Hall":
                    return "You are at New hall already"
                    break;
                case "Sodeinde Hostel":
                    return "Turn right and continue towards Sodeinde Hostel"
                    break;
                case "Makama Hostel":
                    return "Turn left and continue towards Makama Hostel"
                    break;
                case "Eninjoku Hostel":
                    return "Turn left and continue towards Eninjoku Hostel"
                    break;
                case "Access Bank":
                    return "Turn right, cross the road and continue towards Access Bank"
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
                case "Unilag Sports Center":
                    return "Cross to the other side of the road and move towards Unilag Sports center"
                    break;
                default:
                    break;
            }
            break;
        case "Faculty of Arts":
            switch (stop) {
                case "Love Garden":
                    return "Turn right and continue towards Love Garden"
                    break;
                case "Faculty of Arts":
                    return "You are at Faculty of Arts already"
                    break;
                case "Faculty of Law":
                    return "Turn left and continue towards Faculty of Law"
                    break;
                case "Faculty of Mngmt Scs.":
                    return "Continue straight towards Faculty of Mngmt Scs."
                    break;
                case "Faculty of Mass Com.":
                    return "Turn right and continue towards Faculty of Mass Com."
                    break;
                case "Ecobank":
                    return "Continue straight towards Ecobank"
                    break;
                default:
                    break;
            }
            break;
        case "Faculty of Mass Com.":
            switch (stop) {
                case "Ecobank":
                    return "Cross the road towards Ecobank"
                    break;
                case "Faculty of Mass Com.":
                    return "You are at Faculty of Mass Com. already"
                    break;
                case "Faculty of Arts":
                    return "Turn left and continue towards Faculty of Arts"
                    break;
                case "CITS":
                    return "Turn right and continue towards CITS"
                    break;
                default:
                    break;
            }
            break;
        case "Faculty of Mngmt Scs.":
            switch (stop) {
                case "Faculty of Arts":
                    return "Continue straight towards Faculty of Arts"
                    break;
                case "Faculty of Mngmt Scs.":
                    return "You are at Faculty of Mngmt Scs. already"
                    break;
                case "Faculty of Law":
                    return "Turn right and continue towards Faculty of Law"
                    break;
                case "Unilag Main Library":
                    return "Turn left and continue towards Unilag Main Library"
                    break;
                case "Senate Building":
                    return "Turn right and continue via Love Garden towards Senate Building"
                    break;
                case "Love Garden":
                    return "Turn left and continue towards Love Garden"
                    break;
                default:
                    break;
            }
            break;
        case "Faculty of Law":
            switch (stop) {
                case "Faculty of Mngmt Scs.":
                    return "Turn left and continue towards Faculty of Mngmt Scs."
                    break;
                case "Faculty of Law":
                    return "You are at Faculty of Law already"
                    break;
                case "Faculty of Arts":
                    return "Turn right and continue towards Faculty of Arts"
                    break;
                case "Love Garden":
                    return "Continue straight towards Love Garden"
                    break;
                default:
                    break;
            }
            break;
        case "Faculty of Science":
            switch (stop) {
                case "Faculty of Engineering":
                    return "Turn right and pass a narrow route called Indomie bridge towards Faculty of Engineering"
                    break;
                case "Faculty of Science":
                    return "You are at Faculty of Science already"
                    break;
                case "Jaja Hostel":
                    return "Turn right and continue towards Moremi Hostel"
                    break;
                case "Unilag Medical Center":
                    return "Turn right, cross the road and continue towards Unilag Medical Center"
                    break;
                default:
                    break;
            }
            break;
        case "Faculty of Engineering":
            switch (stop) {
                case "Faculty of Science":
                    return "Turn left and pass a narrow route called Indomie bridge towards Faculty of Science"
                    break;
                case "Faculty of Engineering":
                    return "You are at Faculty of Engineering already"
                    break;
                case "Mariere Hostel":
                    return "Come out of the Faculty and continue straiht backwards towards Mariere Hostel"
                    break;
                case "Senate Building":
                    return "Turn left and continue towards Senate Building"
                    break;
                case "Lagoon Front":
                    return "Turn right, pass through Dept of Met. & Mat. and continue towards Lagoon Front"
                    break;
                default:
                    break;
            }
            break;
        case "Access Bank":
            switch (stop) {
                case "New Hall":
                    return "Cross to the other side of the road towards New Hall"
                    break;
                case "Access Bank":
                    return "You are at Access Bank already"
                    break;
                case "New Hall Filling Station":
                    return "Continue straight towards New Hall Filling Station"
                    break;
                case "CITS":
                    return "Turn right a bit and continue towards CITS"
                    break;
                default:
                    break;
            }
            break;
        case "Ecobank":
            switch (stop) {
                case "Faculty of Mass Com.":
                    return "Cross the road and enter the Faculty of Mass Com."
                    break;
                case "Ecobank":
                    return "You are at Ecobank already"
                    break;
                case "Faculty of Arts":
                    return "Continue straight and cross the road towards Faculty of Arts"
                    break;
                case "Mariere Hostel":
                    return "Continue straight towards Mariere Hostel"
                    break;
                default:
                    break;
            }
            break;
        case "Elkanemi Hostel":
            switch (stop) {
                case "Femi Gbaj. Hostel":
                    return "Continue straight towards Femi Gbaj. Hostel"
                    break;
                case "Elkanemi Hostel":
                    return "You are at Elkanemi Hostel already"
                    break;
                case "Amina Hostel":
                    return "Turn left and continue towards Amina Hostel"
                    break;
                case "Kofo Hostel":
                    return "Turn left and continue towards Kofo Hostel"
                    break;
                default:
                    break;
            }
            break;
        case "Femi Gbaj. Hostel":
            switch (stop) {
                case "Elkanemi Hostel":
                    return "Turn right and continue towards Elkanemi Hostel"
                    break;
                case "Femi Gbaj. Hostel":
                    return "You are at Femi Gbaj. Hostel already"
                    break;
                case "Faculty of Education":
                    return "Continue straight towards Faculty of Education"
                    break;
                default:
                    break;
            }
            break;
        case "Biobaku Hostel":
            switch (stop) {
                case "Staff Quarters":
                    return "Turn left and continue towards Staff Quarters"
                    break;
                case "Biobaku Hostel":
                    return "You are at Biobaku Hostel already"
                    break;
                case "Amina Hostel":
                    return "Turn right and continue towards Amina Hostel"
                    break;
                case "Kofo Hostel":
                    return "Turn left and continue towards Kofo Hostel"
                    break;
                default:
                    break;
            }
            break;
        case "Amina Hostel":
            switch (stop) {
                case "Biobaku Hostel":
                    return "Turn left and continue towards Biobaku Hostel"
                    break;
                case "Amina Hostel":
                    return "You are at Amina Hostel already"
                    break
                case "Elkanemi Hostel":
                    return "Turn right and continue towards Elkanemi Hostel"
                    break;
                case "Kofo Hostel":
                    return "Turn right, cross the road and continue towards Kofo Hostel"
                    break;
                default:
                    break;
            }
            break;
        case "Kofo Hostel":
            switch (stop) {
                case "Biobaku Hostel":
                    return "Continue straight towards Biobaku Hostel"
                    break;
                case "Kofo Hostel":
                    return "You are at Kofo Hostel already"
                    break;
                case "Amina Hostel":
                    return "Turn left and continue towards Amina Hostel"
                    break;
                case "Education Garden":
                    return "Pass Education back gate and continue straight towards Education Garden"
                    break;
                case "Elkanemi Hostel":
                    return "Turn right and continue towards Elkanemi Hostel"
                    break;
                default:
                    break;
            }
            break;
        case "Education Garden":
            switch (stop) {
                case "Kofo Hostel":
                    return "Turn left and continue towards Kofo Hostel"
                    break;
                case "Education Garden":
                    return "You are at Education Garden already"
                    break;
                case "Faculty of Education":
                    return "Turn right a bit and continue towards Faculty of Education"
                    break;
                default:
                    break;
            }
            break;
        case "Lagoon Front":
            switch (stop) {
                case "Faculty of Engineering":
                    return "Continue straight towards Faculty of Engineering"
                    break;
                case "Lagoon Front":
                    return "You are at Lagoon Front already"
                    break;
                case "J.F Ajayi Auditorium":
                    return "Turn right and continue towards J.F Ajayi Auditorium"
                    break;
                case "Senate Building":
                    return "Turn right at J.F Ajayi Auditorium and continue straight towards Senate Building"
                    break;
                default:
                    break;
            }
            break;
        case "Love Garden":
            switch (stop) {
                case "Faculty of Arts":
                    return "Turn left and continue towards Faculty of Arts"
                    break;
                case "Love Garden":
                    return "You are at Love Garden already"
                    break;
                case "Faculty of Law":
                    return "Turn left and continue towards Faculty of Law"
                    break;
                case "Unilag Main Library":
                    return "Continue straight towards Unilag Main Library"
                    break;
                case "Senate Building":
                    return "Continue straight towards Senate Building"
                    break;
                default:
                    break;
            }
            break;
        case "Amphitheatre":
            switch (stop) {
                case "Unilag Sports Center":
                    return "Turn right and continue straight towards Unilag Sports Center"
                    break;
                case "Amphitheatre":
                    return "You are at Amphitheatre already"
                    break;
                case "New hall Filling Station":
                    return "Continue straight towards New hall Filling Station"
                    break;
                default:
                    break;
            }
            break;
        case "Unilag Main Library":
            switch (stop) {
                case "Love Garden":
                    return "Turn left and continue towards Love Garden"
                    break;
                case "Unilag Main Library":
                    return "You are at Unilag Main Library already"
                    break;
                case "Senate Building":
                    return "Turn right and continue towards Senate Building"
                    break;
                case "Faculty of Mngmt Scs.":
                    return "Turn right and continue straight towards Faculty of Mngmt Scs."
                    break;
                default:
                    break;
            }
            break;
        case "Senate Building":
            switch (stop) {
                case "Love Garden":
                    return "Turn left and continue towards Love Garden"
                    break;
                case "Unilag Main Library":
                    return "Turn left and continue towards Unilag Main Library"
                    break;
                case "Senate Building":
                    return "You are at Senate Building already"
                    break;
                case "Faculty of Engineering":
                    return "Continue straight beside J.F Ajayi Auditorium towards Faculty of Engineering"
                    break;
                default:
                    break;
            }
            break;
        case "Unilag Staff School":
            switch (stop) {
                case "Unilag DLI":
                    return "Continue straight towards Unilag DLI"
                    break;
                case "Unilag Staff School":
                    return "You are at Unilag Staff School already"
                    break;
                case "Unilag Second Gate":
                    return "Turn left and continue towards Unilag Second Gate"
                    break;
                default:
                    break;
            }
            break;
        case "CITS":
            switch (stop) {
                case "Access Bank":
                    return "Continue straight towards Access Bank"
                    break;
                case "CITS":
                    return "You are at CITS already"
                    break;
                case "Faculty of Mass Com.":
                    return "Continue straight towards Faculty of Mass Com."
                    break;
                default:
                    break;
            }
            break;
        case "First Bank":
            switch (stop) {
                case "Faculty of Social Sciences":
                    return "Turn left and continue towards Faculty of Social Sciences"
                    break;
                case "First Bank":
                    return "You are at First Bank already"
                    break;
                case "Staff Quarters":
                    return "Turn right and continue towards Staff Quarters"
                    break;
                case "Unilag DLI":
                    return "Cross the roundabout and continue towards Unilag DLI"
                    break;
                default:
                    break;
            }
            break;
        case "GTBank":
            switch (stop) {
                case "Mariere Hostel":
                    return "Turn right and ontinue straight towards Mariere Hostel"
                    break;
                case "GTBank":
                    return "You are at GTBank already"
                    break;
                case "Moremi Hostel":
                    return "Cross the road and continue straight towards Moremi Hostel"
                    break;
                case "Zenith Bank":
                    return "Turn left and continue straight towards Zenith Bank"
                    break;
                default:
                    break;
            }
            break;
        case "Zenith Bank":
            switch (stop) {
                case "GTBank":
                    return "Turn right and continue straight towards GTBank"
                    break;
                case "Zenith Bank":
                    return "You are at Zenith Bank already"
                    break;
                case "Jaja Hostel":
                    return "Turn left and continue towards Jaja Hostel"
                    break;
                case "Unilag Medical Center":
                    return "Continue straight down towards Unilag Medical Center"
                    break;
                default:
                    break;
            }
            break;
        case "Mariere Hostel":
            switch (stop) {
                case "GTBank":
                    return "Turn left and continue straight towards GTBank"
                    break;
                case "Mariere Hostel":
                    return "You are at Mariere Hostel already"
                    break;
                case "Moremi Hostel":
                    return "Continue straight, cross the road and continue towards Zenith Bank"
                    break;
                case "Faculty of Engineering":
                    return "Turn right and continue straight down towards Faculty of Engineering"
                    break;
                default:
                    break;
            }
            break;
        case "Moremi Hostel":
            switch (stop) {
                case "Mariere Hostel":
                    return "Turn left and continue towards Mariere Hostel"
                    break;
                case "Moremi Hostel":
                    return "You are at Moremi Hostel already"
                    break;
                case "GTBank":
                    return "Cross the road and continue straight towards GTBank"
                    break;
                case "Faculty of Mass Com.":
                    return "Turn left and continue straight towards Faculty of Mass Com."
                    break;
                case "Unilag Medical Center":
                    return "Continue straight towards Unilag Medical Center"
                    break;

                default:
                    break;
            }
            break;
        case "Jaja Hostel":
            switch (stop) {
                case "Zenith Bank":
                    return "Turn right and continue towards Zenith Bank"
                    break;
                case "Jaja Hostel":
                    return "You are at Jaja Hostel already"
                    break;
                case "Faculty of Science":
                    return "Turn left and continue towards Faculty of Science"
                    break;
                default:
                    break;
            }
            break;
        case "Unilag Medical Center":
            switch (stop) {
                case "Zenith Bank":
                    return "Turn left and continue towards Zenith Bank"
                    break;
                case "Unilag Medical Center":
                    return "You are at Unilag Medical Center already"
                    break;
                case "Moremi Hostel":
                    return "Continue straight towards Moremi Hostel"
                    break;
                case "Faculty of Science":
                    return "Turn left, cross the road and continue towards Faculty of Science"
                    break;
                default:
                    break;
            }
            break;
        case "Unilag Printing Press":
            switch (stop) {
                case "Scholar's Suite":
                    return "Continue straignt towards Scholar's Suite"
                    break;
                case "Unilag Printing Press":
                    return "You are at Unilag Printing Press already"
                    break;
                case "First Bank":
                    return "Continue straight towards First Bank"
                    break;
                case "Unilag DLI":
                    return "Continue straight towards Unilag DLI"
                    break;
                default:
                    break;
            }
            break;
        case "Scholar's Suite":
            switch (stop) {
                case "Unilag Printing Press":
                    return "Turn left and continue towards Unilag Printing Press"
                    break;
                case "Scholar's Suite":
                    return "You are at Scholar's Suite already"
                    break;
                case "Unilag Medical Center":
                    return "Cross the road and continue straight towards Unilag Medical Center"
                    break;
                default:
                    break;
            }
            break;
        case "Honors Hostel":
            switch (stop) {
                case "Women's Society Hostel":
                    return "Turn left and continue straight towards Kofo Hostel"
                    break;
                case "Honors Hostel":
                    return "You are at Honors Hostel already"
                    break;
                case "Unilag DLI":
                    return "Continue straight down towards Unilag DLI"
                    break;
                default:
                    break;
            }
            break;
        case "Women's Society Hostel":
            switch (stop) {
                case "Honors Hostel":
                    return "Turn right and continue towards Honors Hostel"
                    break;
                case "Women's Society Hostel":
                    return "You are at Women's Society Hostel"
                    break;
                case "Unilag DLI":
                    return "Continue straight towards Unilag DLI"
                    break;
                default:
                    break;
            }
            break;
        case "Makama Hostel":
            switch (stop) {
                case "Eninjoku Hostel":
                    return "Turn left and continue towards Eninjoku Hostel"
                    break;
                case "Makama Hostel":
                    return "You are at Makama Hostel already"
                    break;
                case "Sodeinde Hostel":
                    return "Turn right and continue towards Sodeinde Hostel"
                    break;
                case "New Hall":
                    return "Continue straight towards New Hall"
                    break;
                default:
                    break;
            }
            break;
        case "Eninjoku Hostel":
            switch (stop) {
                case "Makama Hostel":
                    return "Turn right and continue towards Makama"
                    break;
                case "Eninjoku Hostel":
                    return "You are at Eninjoku Hostel already"
                    break;
                case "Sodeinde Hostel":
                    return "Turn right and continue towards Sodeinde Hostel"
                    break;
                default:
                    break;
            }
            break;
        case "Sodeinde Hostel":
            switch (stop) {
                case "Makama Hostel":
                    return "Turn left and continue towards Makama Hostel"
                    break;
                case "Eninjoku Hostel":
                    return "Turn right and continue towards Eninjoku Hostel"
                    break;
                case "Sodeinde Hostel":
                    return "You are at Sodeinde Hostel already"
                    break;
                case "New Hall":
                    return "Cross the road and continue straight towards New Hall"
                    break;
            }
            break;



            
    }

}

export default generatePathDesc
