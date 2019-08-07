/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { FruitData } from './Data/FlatListAData'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Modal,
  Alert,
  Image,
  FlatList,
  SectionList,
  overrideRenderItem,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
   state = {
    modalVisible: false,
    decideList: true,
  };

  setModalVisible(visible, decideList) {
    this.setState({ modalVisible: visible });
    this.setState({
      decideList
    });
  }

  render() {
    return (

      <View style={{ marginTop: 22, backgroundColor: 'white' }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            
          }}>
          <View style={{ marginTop: 22 }}>

          <TouchableOpacity onPress={() => {
                this.setModalVisible(!this.state.modalVisible, true);
              }}>
                <Text>Hide Modal</Text>
              </TouchableOpacity>

            {(this.state.decideList) ?
              <View>
                <FlatList
                  title={'Fruits'}
                  data={FruitData}
                  onPress={() => alert("clicked")}

                  renderItem={({ item }) => (
                    <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                      <TouchableOpacity onPress={() => alert(item)}>
                        <Image style={styles.imageThumbnail} source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
                        <Text style={styles.TextStyle}>{item} </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                  //Setting the number of column
                  numColumns={2}
                  keyExtractor={(item, index) => index}
                />
                <TouchableOpacity
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible, true);
                  }}>
                  <Text>Hide Modal</Text>
                </TouchableOpacity>
              </View>

              :
<View>
              <View style={marginTop=22}>
                <SectionList
                  sections={[
                    { title: 'Books starting with A', data: ['Alchemist', 'Alice in Wonderland', 'American Gods'] },
                    { title: 'Books starting with B', data: ['Baker Towers', 'Back When We Were Grownups', 'Barbed Wire Heart'] },
                    { title: 'Books starting with C', data: ['California', 'Calling Me Home', 'The Cartographer of No Man\'s Land'] },
                  ]}
                  renderSectionHeader={({ section }) => {
                    return (
                      <View style={marginTop=22}>
                        <Text style={styles.title}>
                          {section.title}
                        </Text>
                      </View>
                    )
                  }}
                  
                     renderItem={({ item }) => (
                    <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                      <TouchableOpacity onPress={() => alert(item +'  pressed')}>
                        <Image style={styles.imageThumbnail} source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
                        <Text style={styles.TextStyle}>{item} </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                  //Setting the number of column
                  numColumns={2}
                  keyExtractor={(item, index) => index}
                />
              </View>
              
             
              </View>    

            }


          </View>
        </Modal>

        {/* <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableOpacity> */}


        <View style={styles.body}>


          <TouchableOpacity onPress={() => {
            this.setModalVisible(true, true);
          }}>
            <Text style={styles.button}>Flat List</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            this.setModalVisible(true, false);
          }}>

            <Text style={styles.button}>Sectioned List</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  button: {
    backgroundColor: 'blue',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    marginTop: 20,
    fontSize: 18,
    margin: 20,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
  },
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    height: 120,
  },
  TextStyle: {
    alignContent: 'center',
    textAlign: 'center',
    fontSize: 15,
    padding: 1,
  },
  
  title: {
    fontSize: 25,
    color: "#000000"
  },
  container: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
 
  
});

export default App;
