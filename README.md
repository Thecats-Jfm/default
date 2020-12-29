
# 代码规范

name of CREEP should be **role+数字**

方法名 应该尽量是首字母大写的不带下划线的单词

属性值应该尽量小写

builder
harvester
super_harvester
repairer
upgrader

文件名第一个单词首字母大写

变量名每个单词首字母大写

config

Flag：
Room1_Storage1
Farm1_Source1
Farm1_Controller

Creeps.generator: 生成器

## Storage_

include Storage,Link,Container

#

## Attacker

## Carrier

From Storage to Spawn=Extension>Tower

## Builder

From Storage to ConstructionSite

## Repairer

From Storage to Road=Container=Rawpart||filter:hp<0.8

## Harvester

From Source to Storage

## Claimer

From None to Controller

## Upgrader

From Storage to Controller

# Creeps.way

注：所有使用flag的方法应当支持跨房间。

## BuildFlagRoom(creep,flag)

建造Flag所在房间的所有建造点

## MoveToFlag(creep,flag)

可视化行走到达Flag位置

## BuildTarget(creep,target)

同房间寻路并建造Target

## RepairTarget(creep,target)

同房间寻路并修理Target

## TransferToFlag(creep,flag)

将资源转移到Flag1格以内的Storage中

## TransferTarget(creep,target)

将资源(ENERGY)转移到Target中

## WithdrawFromFlag(creep,flag)

在flag附近1格之内寻找Storage并且Withdraw

## WithdrawFromTarget(creep,target)

WithdrawFromTarget

## WithdrawFromStorage(creep) |Old

在同房间中寻找离creep最近的Storage给她贴贴。

## HarvestFlag(creep,flag)

收割pos==flag.pos的 STRUCTURE_SOURCES
