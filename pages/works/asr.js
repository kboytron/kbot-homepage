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
  <Layout title="SpeechServe (CTC + DNN)">
    <Container>
      <Title>
        SpeechServe (CTC + DNN) <Badge>2024-present</Badge>
      </Title>
      <P>
        A full-stack, end-to-end speech recognition system implementing Connectionist Temporal
        Classification (CTC) and deep neural networks to convert raw audio into transcribed text.
        The system supports variable-length input and output sequences, and is currently being
        extended to serve predictions through an API and web interface.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Key Components</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Input Processing:</strong> Extracts audio features using context windows and
          subsampling for performance and generalization.
        </ListItem>
        <ListItem>
          <strong>Neural Architecture:</strong> Deep feed-forward acoustic model trained with
          TensorFlow and ReLU activations.
        </ListItem>
        <ListItem>
          <strong>CTC Alignment:</strong> Implements dynamic programming to align input frames with
          output token sequences.
        </ListItem>
        <ListItem>
          <strong>Beam Search Decoding:</strong> Generates final predictions using beam search and
          computes Character Error Rate (CER) for evaluation.
        </ListItem>
        <ListItem>
          <strong>Deployment (in progress):</strong> Building API endpoints and frontend interface to
          expose transcription capabilities.
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, TensorFlow, NumPy, kaldi-io, REST API (WIP)</span>
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
