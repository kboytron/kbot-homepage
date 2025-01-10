import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    UnorderedList,
    Center,
    Heading
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Speech Recognition System">
      <Container>
        <Title>
          Speech Recognition System <Badge>2024</Badge>
        </Title>
        <P>
          Completed as part of the Spring 2024 offering of CS:4420 Artificial Intelligence at the University of Iowa.
        </P>
        <br></br>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Description</Center>
        </Heading>
        <P>
          A complete Automatic Speech Recognition (ASR) system built from the ground up using the Connectionist 
          Temporal Classification (CTC) approach. The system processes audio features through a multi-stage pipeline: 
          from input processing and tokenization, to neural network training, and finally sequence alignment and 
          recognition.
        </P>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>System Components</Center>
        </Heading>
        <UnorderedList my={4}>
          <ListItem>Input Processing: Feature extraction from audio with dynamic context windows and subsampling for efficiency</ListItem>
          <ListItem>Neural Architecture: Deep feed-forward network with ReLU activation for acoustic modeling</ListItem>
          <ListItem>CTC Alignment: Forced alignment using dynamic programming for token sequence generation</ListItem>
          <ListItem>Beam Search Decoding: Recognition system using TensorFlow for sequence prediction</ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, NumPy, TensorFlow, kaldi-io</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="[Link to source code]">
              [Link to source code] <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <Center my={6}>
          <WorkImage src="/images/works/asr_overview.png" alt="ASR System Overview" />
        </Center>
        <Center my={6}>
          <WorkImage src="/images/works/alignment_viz.png" alt="Token Alignment Visualization" />
        </Center>
        <Center my={6}>
          <WorkImage src="/images/works/training_curve.png" alt="Training Progress" />
        </Center>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'