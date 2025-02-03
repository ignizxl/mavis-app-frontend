import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  description: {
    textAlign: 'center',
    marginBottom: 30,
    color: '#555',
    fontSize: 16,
    lineHeight: 24,
  },
  reportList: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  reportButton: {
    marginVertical: 10,
    width: '100%',
    backgroundColor: '#17a2b8',
  },
  reportButtonText: {
    color: 'white',
    marginLeft: 10,
  },
  bottomBar: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  navButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles