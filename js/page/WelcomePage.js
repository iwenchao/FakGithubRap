/**
 * Author: iwen
 * Create Time: 2018-06-24 17:19
 * Description:
 */
import ThemeDao from "../expand/dao/ThemeDao";
import SplashScreen from 'react-native-splash-screen'

export default  class WelcomePage extends Component{
    componentDidMount(){
        const {navigator} = this.props;
        new  ThemeDao().getTheme().then((data=>{
            this.theme = data;
        }));

        this.timer = setTimeout(()=>{
            InteractionManager.runAfterInteractions(()=>{
                SplashScreen.hide();
                navigator.resetTo({
                    component:HomePage,
                    name:'HomePage',
                    params:{
                        theme:this.theme
                    }
                });
                
            })
        },500)
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }


    render(){
        return (
            <View style={styles.container}>
                <Image style={{flex:1, width:null}}
                       resizeMode='repeat'
                       source={require('../../res/images/logo.png.png')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});