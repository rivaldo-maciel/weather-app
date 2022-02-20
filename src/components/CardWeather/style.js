import styled from 'styled-components';
import { CloudLightningRain } from '@styled-icons/bootstrap/CloudLightningRain'
import { Droplet } from '@styled-icons/open-iconic/Droplet';
import { Umbrella } from '@styled-icons/ionicons-solid/Umbrella';
import { Nightlight } from '@styled-icons/material-twotone/Nightlight';
import { Wind } from '@styled-icons/bootstrap/Wind';
import { CloudSnow } from '@styled-icons/bootstrap/CloudSnow';
import { CloudHail } from '@styled-icons/bootstrap/CloudHail';
import { CloudRain } from '@styled-icons/bootstrap/CloudRain';
import { CloudFog } from '@styled-icons/bootstrap/CloudFog';
import { WeatherSunny } from '@styled-icons/fluentui-system-regular/WeatherSunny';
import { WeatherNight } from '@styled-icons/typicons/WeatherNight';
import { Cloud } from '@styled-icons/bootstrap/Cloud';

export const Card = styled.section`
  background: #0f4571;
  height: 200px;
  width: 340px;
  align-self: center;
  border-radius: 20px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  font-weight: bold;
  color: white;
  justify-content: space-evenly;
  padding: 15px;
`

export const StormIcon = styled(CloudLightningRain)`
  height: 140px;
`
export const SnowIcon = styled(CloudSnow)`
  height: 140px;
`
export const HailIcon = styled(CloudHail)`
  height: 140px;
`
export const RainIcon = styled(CloudRain)`
  height: 140px;
`
export const FogIcon = styled(CloudFog)`
  height: 140px;
`
export const ClearDayIcon = styled(WeatherSunny)`
  height: 140px;
`

export const ClearNightIcon = styled(WeatherNight)`
  height: 140px;
`

export const CloudIcon = styled(Cloud)`
  height: 140px;
`

export const DropIcon = styled(Droplet)`
  height: 20px;
`
export const UmbrellaIcon = styled(Umbrella)`
  height: 20px;
`

export const NightIcon = styled(Nightlight)`
  height: 20px;
`
export const WindIcon = styled(Wind)`
  height: 20px;
`