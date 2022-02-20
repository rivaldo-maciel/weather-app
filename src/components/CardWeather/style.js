import styled from 'styled-components';
import { CloudLightningRain } from '@styled-icons/bootstrap/CloudLightningRain'
import { Droplet } from '@styled-icons/open-iconic/Droplet';
import { Umbrella } from '@styled-icons/ionicons-solid/Umbrella';
import { Nightlight } from '@styled-icons/material-twotone/Nightlight';
import { Wind } from '@styled-icons/bootstrap/Wind';

export const Card = styled.section`
  background: #0f4571;
  height: 200px;
  width: 340px;
  align-self: center;
  border-radius: 20px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  font-weight: bold;
  color: white;
  justify-content: space-between;
`

export const StormIcon = styled(CloudLightningRain)`
  height: 140px;
  margin-left: 30px;
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