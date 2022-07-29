<template>
  <div class="home">
    <div class="left">
      <div class="topTips">请扫码周转箱或者快递单</div>
      <div class="clearInput">
        <el-input
          size="medium"
          v-model="input1"
          placeholder="请输入内容"
        ></el-input>
        <el-button size="medium" class="font13" type="primary">清除</el-button>
      </div>
      <el-row class="rowBox">
        <el-col :span="12"><span class="itemTitle">类型值：</span>1212</el-col>
        <el-col :span="12"
          ><span class="itemTitle">周转箱码：</span>1212</el-col
        >
      </el-row>
      <el-row class="rowBox">
        <el-col :span="12"
          ><span class="itemTitle">出库单号：</span>1212</el-col
        >
        <el-col :span="12"
          ><span class="itemTitle">货主名称：</span>1212</el-col
        >
      </el-row>
      <el-row class="rowBox">
        <el-col :span="12"
          ><span class="itemTitle">原始单号：</span>1212</el-col
        >
        <el-col :span="12"
          ><span class="itemTitle">工单状态：</span>1212</el-col
        >
      </el-row>
      <el-row class="rowBox">
        <el-col :span="12"><span class="itemTitle">收件人：</span>1212</el-col>
        <el-col :span="12"
          ><span class="itemTitle">物流名称：</span>1212</el-col
        >
      </el-row>
      <el-row class="rowBox">
        <el-col :span="12"
          ><span class="itemTitle">物流单号：</span>1212</el-col
        >
        <el-col :span="12"
          ><span class="itemTitle">收货电话：</span>1212</el-col
        >
      </el-row>
      <div class="rowBox">
        <span class="itemTitle">邮寄地址：</span>
        <el-input
          class="textareaBox"
          type="textarea"
          resize="none"
          :rows="3"
          placeholder="请输入内容"
          v-model="textarea"
        >
        </el-input>
      </div>
      <el-row class="rowBox">
        <el-col :span="12"
          ><span class="itemTitle">预估重量：</span>1212</el-col
        >
        <el-col :span="12"
          ><span class="itemTitle">货品总数：</span>1212</el-col
        >
      </el-row>
      <el-row class="rowBox">
        <el-col :span="12"
          ><span class="itemTitle">当前快递：</span>1212</el-col
        >
        <el-col :span="12"><span class="itemTitle">周转箱：</span>1212</el-col>
      </el-row>
      <el-row class="rowBox">
        <el-col :span="12"
          ><span class="itemTitle">打包数量：</span
          ><span class="fweight" style="color: red">2213131</span></el-col
        >
        <el-col :span="12"
          ><span class="itemTitle">订单剩余数量：</span
          ><span class="fweight" style="color: #e6a23c">2213131</span></el-col
        >
      </el-row>
      <el-row class="rowBox">
        <el-col :span="12"
          ><span class="itemTitle">推荐箱号：</span>1212</el-col
        >
        <el-col :span="12"
          ><span class="itemTitle">使用箱号：</span>1212</el-col
        >
      </el-row>
    </div>
    <div class="right">
      <!-- <p class="p">
        <span>公司：10010</span>
        <span>仓库：OLATY</span>
      </p> -->
      <div class="tableBox">
        <el-table :data="tableData" height="350" border style="width: 100%">
          <el-table-column prop="date" label="条码号"> </el-table-column>
          <el-table-column prop="name" label="订单数量"> </el-table-column>
          <el-table-column prop="address" label="扫描数量"> </el-table-column>
          <el-table-column prop="address" label="货品名称"> </el-table-column>
        </el-table>
        <el-pagination
          background
          small
          layout="prev, pager, next,jumper"
          :total="1000"
        >
        </el-pagination>
      </div>
      <div class="box2">
        <el-row class="rowBox">
          <el-col :span="9" style="text-align: left"
            ><span class="itemTitle" style="width: fit-content"
              >包裹重量：</span
            >
            <el-input
              class="weight"
              v-model="input1"
              placeholder="0"
            ></el-input>
            <i>克</i>
          </el-col>
          <el-col :span="15">
            <el-button size="medium" class="btnHetght font13" type="primary"
              >手工录入重量</el-button
            >
            <el-button size="medium" class="btnHetght font13" type="primary"
              >摄像头检查</el-button
            >
            <span class="state">摄像头状态：<i>关</i></span>
          </el-col>
        </el-row>
      </div>
      <div class="box3 font13">
        <el-checkbox label="已开启子单"></el-checkbox>
        <el-checkbox label="面单已打印"></el-checkbox>
        <el-checkbox label="允许跳过称重"></el-checkbox>
        <el-checkbox label="自动称重发货"></el-checkbox>
        <el-checkbox label="开启一单一品"></el-checkbox>
        <el-checkbox label="直接打印（默认打印机）"></el-checkbox>
      </div>
      <p>上一单号：2131321232</p>
      <div class="box4">
        <div class="left">
          <el-button type="primary" class="btn">
            <div class="fontRed">
              <p>子单号</p>
              <p>(开/关)</p>
            </div>
          </el-button>
          <el-button type="primary" class="btn">获取子单号</el-button>
          <el-button type="primary" class="btn">快速切换</el-button>
          <el-button type="primary" class="btn">
            <div>
              <p>开启</p>
              <p>一单一品</p>
            </div>
          </el-button>
          <el-button type="primary" class="btn">跳过此单</el-button>
          <el-button type="primary" class="btn">自动称重发货</el-button>
          <el-button type="primary" class="btn">
            <div class="fontRed">
              <p>手工打印</p>
              <p>(开/关)</p>
            </div>
          </el-button>
          <el-button type="primary" class="btn">手动打印</el-button>
          <el-button type="primary" class="btn">随箱单打印</el-button>
          <el-button type="primary" class="btn">重连电子秤</el-button>
          <el-button type="primary" class="btn">查找订单</el-button>
          <el-button type="primary" class="btn">录入箱号</el-button>
        </div>
        <el-button type="primary" class="right">确认发货</el-button>
      </div>
      <el-row class="box5">
        <el-col :span="5">
          <el-button
            @click="dialogVisible = true"
            size="medium"
            class="btnHetght font13"
            type="primary"
            >批次录入</el-button
          >
        </el-col>
        <el-col :span="5">
          <el-button size="medium" class="btnHetght font13" type="primary"
            >唯一码录入</el-button
          >
        </el-col>
        <el-col :span="6">
          <el-button size="medium" class="btnHetght font13" type="primary"
            >唯一码直接录入</el-button
          >
        </el-col>
        <el-col :span="8">
          <el-input
            class="textareaBox"
            type="textarea"
            resize="none"
            :rows="3"
            placeholder="请输入内容"
            v-model="textarea"
          >
          </el-input>
        </el-col>
      </el-row>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%" center>
      <el-input
        class="textareaBox"
        type="textarea"
        resize="none"
        :rows="3"
        placeholder="请输入内容"
        v-model="textarea"
      >
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button class="font13" size="medium" @click="dialogVisible = false">取 消</el-button>
        <el-button class="font13" size="medium" type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<style scoped lang="scss">
::v-deep .font13 {
  font-size: 14px;
  .el-checkbox {
    font-size: 14px;
    .el-checkbox__label {
      font-size: 14px;
    }
  }
}
.btnHetght {
  padding-left: 10px;
  padding-right: 10px;
}
.home {
  display: flex;
  padding: 0 10px;
  box-sizing: border-box;
  .rowBox {
    margin-bottom: 20px;
    .itemTitle {
      width: 100px;
      display: inline-block;
      text-align: right;
    }
    .textareaBox {
      width: calc(100% - 120px);
      vertical-align: text-top;
    }
    .fweight {
      font-weight: 700;
      font-size: 22px;
    }
  }
  .left {
    width: 35%;
    // width: 450px;
    height: 100%;
    // background: pink;
    overflow-x: auto;
    margin-right: 1.5%;
    font-size: 14px;
    .topTips {
      font-weight: 700;
      font-size: 15px;
    }
    .clearInput {
      .el-input {
        width: 70%;
        margin: 20px 5% 20px 0;
      }
    }
  }
  .right {
    width: 63.5%;
    height: 100%;
    font-size: 14px;
    .tableBox {
      border: 1px solid #f6f6f6;
      box-sizing: border-box;
      margin: 10px 0;
    }
    .box2 {
      margin: 20px 0;
      .weight {
        width: 40%;
        font-weight: 700;
        margin-right: 10px;
        font-size: 18px;
      }
      .state {
        margin-left: 10px;
        i {
          font-size: 15px;
          color: red;
        }
      }
    }
    .box3 {
      font-size: 14px;
      .el-checkbox {
        margin-bottom: 15px;
      }
    }
    .box4 {
      display: flex;
      margin-top: 5px;
      .left {
        width: 85%;
        .btn {
          width: 95px;
          height: 50px;
          margin: 10px 1.6% 0 0;
          vertical-align: top;
          text-align: center;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          color: #fff;
          font-size: 14px;
        }
      }
      .right {
        width: 14%;
        margin-top: 10px;
        margin-left: 1%;
        height: 110px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #409eff;
        border-radius: 4px;
        color: #fff;
      }
    }
    .box5 {
      margin-top: 20px;
    }
  }
}
.fontRed {
  color: red;
}
::v-deep .el-pagination {
  padding: 5px;
  .btn-prev {
    margin-left: 0;
  }
}
::v-deep .tableBox {
  .el-table__cell {
    padding: 5px 0;
    font-size: 14px;
  }
}
::v-deep .el-dialog {
  .el-dialog__body {
  padding: 15px 25px;
}
}
</style>
<script>
import { getHaoKanVideo } from '@/request/api';
export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      input1: '',
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      dialogVisible: false,
      textarea: ''
    };
  },
  created() {
    this.test()
  },
  mounted() {

  },
  methods: {
    async test() {
      let result = await getHaoKanVideo({
        page: 0,
        size: 10
      })
      console.log(11111, result)
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(() => {
          done();
        })
        .catch(() => { });
    }
  }
}
</script>