import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import React from "react";


const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });

const PdfFile = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>You can find some important qna s on our blog page. Some questions and ans for sample: 
          Q: What is the differences between uncontrolled and controlled components?
            A:  In React, a controlled component is a component that is controlled by React state, while an uncontrolled
              component is a component that maintains its own internal state. A controlled component receives its
              current value and an update callback via props, and the parent component manages the state of the
              component. When the user interacts with the component, the parent component updates the state, which in
              turn updates the component's value. An uncontrolled component, maintains its own internal state, and when
              the user interacts with the component, it updates its own state, which in turn updates the component's
              value.
              Q:  How to validate React props using PropTypes?
              A: o validate React props using PropTypes, we need to follow these steps: 1.Import PropTypes at the top of your React component file, 2. Define the expected data type for each prop in our component using PropTypes and last 3. Add the PropTypes validation to oue component's function or class declaration.
              Q: What is a custom hook, and why will you create a custom hook?
              A: Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PdfFile;
