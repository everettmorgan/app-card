import { Options, Vue } from 'vue-class-component';
import Grid from './components/Grid';
import Flexbox from './components/Flexbox';
import './App.css';

@Options({
  components: {
    Grid,
    Flexbox,
  },
  props: {
    logo: String,
    name: String,
    desc: String,
    rating: String,
    ratingTotal: String,
    availablePlan: String,
    learnMore: String,
  },
})
class App extends Vue {
  name!: string;

  logo!: string;

  desc?: string;

  rating?: string;

  ratingTotal?: string;

  availablePlan!: string;

  learnMore!: string;

  onClick() {
    window.location.assign(this.learnMore);
  }

  mounted() {
    this.$el.addEventListener('mouseover', () => {
      this.$el.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.15)';
    });

    this.$el.addEventListener('mouseout', () => {
      this.$el.style.boxShadow = '0px 0px 0px rgba(0, 0, 0, 0.15)';
    });
  }

  render() {
    return (
      <div class="appCard">
        <Grid class="appCardInner" columns="2fr" gap="0px" row="repeat(4, 1fr)">
          <img src={this.logo} class="appCardLogo"/>
          <Flexbox
            flexDirection="column"
            justifyContent="center"
          >
            <h2 class="appCardName">{this.name}</h2>
            <p class="appCardDesc">{this.desc}</p>
          </Flexbox>
          <Grid class="appCardRating" columns="max-content max-content">
            <svg
              id="Layer_1"
              class="ratingStar"
              fill="#f6ac3c"
              height="100%"
              style="enable-background: new 0 0 329.942 329.942"
              version="1.1"
              viewBox="0 0 329.942 329.942"
              width="12"
              x="0px"
              xmlns="http://www.w3.org/2000/svg"
              y="0px"
            >
              <path id="XMLID_16_"
                    d={'M329.208,126.666c-1.765-5.431-6.459-9.389-12.109-10'
                      + '.209l-95.822-13.922l-42.854-86.837c-2.527-5.12-7.742-8.362-13.451-8.362c-'
                      + '5.71,0-10.925,3.242-13.451,8.362l-42.851,86.836l-95.825,13.922c-5.65,0.821'
                      + '-10.345,4.779-12.109,10.209c-1.764,5.431-0.293,11.392,3.796,15.377l69.339,6'
                      + '7.582L57.496,305.07c-0.965,5.628,1.348,11.315,5.967,14.671c2.613,1.899,5.708,'
                      + '2.865,8.818,2.865c2.387,0,4.784-0.569,6.979-1.723l85.711-45.059l85.71,45.059c2'
                      + '.208,1.161,4.626,1.714,7.021,1.723c8.275-0.012,14.979-6.723,14.979-15c0-1.152-'
                      + '0.13-2.275-0.376-3.352l-16.233-94.629l69.339-67.583C329.501,138.057,330.972,132'
                      + '.096,329.208,126.666z'
                    }/>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
            <Flexbox alignItems="center">
              <p class="ratingText">
                {this.rating ?? ''} ({this.ratingTotal ?? 0})
              </p>
            </Flexbox>
          </Grid>
          <Grid columns="max-content 1fr" gap="0px" rows="1fr">
            <p class="appCardPlan">{this.availablePlan} available</p>
            <p class="appCardMore" onClick={this.onClick}>Learn More ➡</p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
