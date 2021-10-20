import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles( (theme) => ({
    toolbar: {
        marginTop: "20px",
    },

    container: {
        border: "2px solid transparent",
        padding: theme.spacing(8, 0, 6)
    },

    icon: {
        marginRight: "20px"
    },

    buttons: {
        marginTop: "20px",
        padding: "15px 20px",
        borderRadius: "10px"
    },
    cardGrid: {
        padding: "20px 0"
    },
    card: {
        width: "100%",
        display: "flex",
        flexDirection: "column"
    },
    cardMedia: {
        paddingTop: "56.25%" //default iamge view in 16:9 aspect ratio
    },
    cardContent: {
        flexGrow: "1"
    },
    
    appBar: {
        width: "auto",
        backgroundColor: "#FF00FF",
    },
    footer: {
        padding: "30px 0",
        
    }
}) )


export default useStyles;