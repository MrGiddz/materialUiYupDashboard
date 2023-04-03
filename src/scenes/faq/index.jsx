import { Box, useTheme, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import Header from '../../components/Header';
import { ExpandMoreOutlined } from '@mui/icons-material';
import { tokens } from '../../theme';

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked uestions Page" />

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                <Typography color={colors.greenAccent[500]}>
                    An Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus amet saepe expedita quia vero voluptate, dolorem obcaecati, eos aliquam eum natus neque consectetur nulla, quae ullam iure quas est molestias.
                    Repellendus sunt ratione deleniti doloribus veniam rerum non nihil ducimus sequi, possimus atque voluptatem, voluptatibus officiis repudiandae voluptas. Culpa consequuntur quo maxime, possimus aut temporibus. Dolores molestias aliquid a ullam.
                </Typography>
            </AccordionDetails>
        </Accordion>
        

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                <Typography color={colors.greenAccent[500]}>
                    An Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus amet saepe expedita quia vero voluptate, dolorem obcaecati, eos aliquam eum natus neque consectetur nulla, quae ullam iure quas est molestias.
                    Repellendus sunt ratione deleniti doloribus veniam rerum non nihil ducimus sequi, possimus atque voluptatem, voluptatibus officiis repudiandae voluptas. Culpa consequuntur quo maxime, possimus aut temporibus. Dolores molestias aliquid a ullam.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                <Typography color={colors.greenAccent[500]}>
                    An Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus amet saepe expedita quia vero voluptate, dolorem obcaecati, eos aliquam eum natus neque consectetur nulla, quae ullam iure quas est molestias.
                    Repellendus sunt ratione deleniti doloribus veniam rerum non nihil ducimus sequi, possimus atque voluptatem, voluptatibus officiis repudiandae voluptas. Culpa consequuntur quo maxime, possimus aut temporibus. Dolores molestias aliquid a ullam.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                <Typography color={colors.greenAccent[500]}>
                    An Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus amet saepe expedita quia vero voluptate, dolorem obcaecati, eos aliquam eum natus neque consectetur nulla, quae ullam iure quas est molestias.
                    Repellendus sunt ratione deleniti doloribus veniam rerum non nihil ducimus sequi, possimus atque voluptatem, voluptatibus officiis repudiandae voluptas. Culpa consequuntur quo maxime, possimus aut temporibus. Dolores molestias aliquid a ullam.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                <Typography color={colors.greenAccent[500]}>
                    An Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus amet saepe expedita quia vero voluptate, dolorem obcaecati, eos aliquam eum natus neque consectetur nulla, quae ullam iure quas est molestias.
                    Repellendus sunt ratione deleniti doloribus veniam rerum non nihil ducimus sequi, possimus atque voluptatem, voluptatibus officiis repudiandae voluptas. Culpa consequuntur quo maxime, possimus aut temporibus. Dolores molestias aliquid a ullam.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                <Typography color={colors.greenAccent[500]}>
                    An Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus amet saepe expedita quia vero voluptate, dolorem obcaecati, eos aliquam eum natus neque consectetur nulla, quae ullam iure quas est molestias.
                    Repellendus sunt ratione deleniti doloribus veniam rerum non nihil ducimus sequi, possimus atque voluptatem, voluptatibus officiis repudiandae voluptas. Culpa consequuntur quo maxime, possimus aut temporibus. Dolores molestias aliquid a ullam.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                <Typography color={colors.greenAccent[500]}>
                    An Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus amet saepe expedita quia vero voluptate, dolorem obcaecati, eos aliquam eum natus neque consectetur nulla, quae ullam iure quas est molestias.
                    Repellendus sunt ratione deleniti doloribus veniam rerum non nihil ducimus sequi, possimus atque voluptatem, voluptatibus officiis repudiandae voluptas. Culpa consequuntur quo maxime, possimus aut temporibus. Dolores molestias aliquid a ullam.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                <Typography color={colors.greenAccent[500]}>
                    An Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus amet saepe expedita quia vero voluptate, dolorem obcaecati, eos aliquam eum natus neque consectetur nulla, quae ullam iure quas est molestias.
                    Repellendus sunt ratione deleniti doloribus veniam rerum non nihil ducimus sequi, possimus atque voluptatem, voluptatibus officiis repudiandae voluptas. Culpa consequuntur quo maxime, possimus aut temporibus. Dolores molestias aliquid a ullam.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                <Typography color={colors.greenAccent[500]}>
                    An Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus amet saepe expedita quia vero voluptate, dolorem obcaecati, eos aliquam eum natus neque consectetur nulla, quae ullam iure quas est molestias.
                    Repellendus sunt ratione deleniti doloribus veniam rerum non nihil ducimus sequi, possimus atque voluptatem, voluptatibus officiis repudiandae voluptas. Culpa consequuntur quo maxime, possimus aut temporibus. Dolores molestias aliquid a ullam.
                </Typography>
            </AccordionDetails>
        </Accordion>

    </Box>
}

export default FAQ