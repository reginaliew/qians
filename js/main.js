
const element = <h1>Hello, world</h1>;

class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          players: [
            {
                id: 'chushang',
                name: '初商',
                // image: '//github.com/reginaliew/qians/blob/master/img/chushang1.jpg',
                image: '/../img/chushang1.jpg',
                //   cover: '//github.com/reginaliew/qians/blob/master/img/chushang.jpg',
                cover: '/../img/chushang.jpg',
              desc: '寸哥是我认识时间最短的老哥。'
            },{
              id: 'zhuiyun',
              name: '追云长慕',
            //   image: '//github.com/reginaliew/qians/blob/master/img/zhuiyun1.jpg',
              image: '/../img/zhuiyun1.jpg',
            //   cover: '//github.com/reginaliew/qians/blob/master/img/zhuiyun2.jpg',
              cover: '/../img/zhuiyun2.jpg',
              desc: '很会下厨的潭宝宝'
            },{
              id: 'musui',
              name: '暮岁',
            //   image: '//github.com/reginaliew/qians/blob/master/img/musui1.jpg',
              image: '/../img/musui1.jpg',
            //   cover: '//github.com/reginaliew/qians/blob/master/img/musui2.jpg',
              cover: '/../img/musui2.jpg',
              desc: '我家的千千小宝贝，不管改了多少次的名我还是只叫的惯这个名啊。'
            },{
              id: 'daoyue',
              name: '稻月',
            //   image: '//github.com/reginaliew/qians/blob/master/img/daoyue1.jpg',
              image: '/../img/daoyue1.jpg',
            //   cover: '//github.com/reginaliew/qians/blob/master/img/daoyeu2.jpg',
              cover: '/../img/daoyeu2.jpg',
              desc: '这是我。'
            },{
              id: 'chengqiu',
              name: '澄秋',
            //   image: '//github.com/reginaliew/qians/blob/master/img/chengqiu1.jpg',
              image: '/../img/chengqiu1.jpg',
            //   cover: '//github.com/reginaliew/qians/blob/master/img/chengqiu1.jpg',
              cover: '/../img/chengqiu1.jpg',
              desc: '我的澄澄小宝贝，谢谢你带我进这个结义队。'
            },
          ],
          windowWidth: window.innerWidth, 
          windowHeight: window.innerHeight
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
      this.setState({ 
        windowWidth: window.innerWidth, 
        windowHeight: window.innerHeight 
      });
    }

    render() {

        const players = this.state.players.map((p)=>{
            return (
                <div className="player" key={p.id}>
                    <div className={"player-front right"}></div>
                    <div className="player-back">
                        <img src={p.image} alt={p.name} className={"adjWidth " + (p.id==='zhuiyun'?"noAdjust ":"") + (p.id==='chengqiu'?"adjHigher  ":"") + (p.id==='chushang'?"adjHigher ":"")} />
                        <span>{p.name}</span>
                    </div>
                </div>
            );
        });

        return(
            <div className="container">
                <div className="home-bg">
                    <div className="home-title">我的沙雕结义队</div>
                    <div className="players">
                        {players}
                    </div>
                </div>
                <div id="navPart" className="nav-bg">
                    <div className="nav-bar">
                            <a className="nav-item" href="#">人物传</a>
                            <a className="nav-item" href="#">时间线</a>
                            <a className="nav-item" href="#">回忆录</a>
                            <a className="nav-item" href="#">沙雕小剧场</a>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Home />, 
    document.getElementById('root')
);