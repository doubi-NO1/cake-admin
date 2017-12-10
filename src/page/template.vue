<template>
    <div class="template">
        <div class="form">
            <el-row>
                <el-col :span="23">
                    <el-form label-width="80px" :inline="true">
                        <el-form-item label="搜索：">
                            <el-select v-model="selected" placeholder="请选择">
                                <el-option label="模版" value="shanghai"></el-option>
                                <el-option label="标签" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="">
                            <el-input v-model="search" placeholder="请输入搜索内容"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">搜索</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="1">
                      <el-button type="primary" >新增</el-button>
                </el-col>
            </el-row>
        </div>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            prop="id"
            label="模版ID"
            >
            </el-table-column>
            <el-table-column
            prop="name"
            label="模版名称"
            >
            </el-table-column>
            <el-table-column
            prop="type"
            label="类型">
            </el-table-column>
            <el-table-column
            prop="status"
            label="状态"
            >
            </el-table-column>
            <el-table-column
            prop="author"
            label="作者"
            >
            </el-table-column>
            <el-table-column
            prop="date"
            label="创建时间">
            </el-table-column>
            <el-table-column
            prop="action"
            label="操作">
            <template slot-scope="scope">
                <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData4)"
                type="text"
                size="small">
                编辑
                </el-button>
                <el-button
                @click.native.prevent="EditRow(scope.$index, tableData4)"
                type="text"
                size="small">
                移除
                </el-button>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data() {
        return{
            search: '',
            selected: '',
            tpl: {
                name: '',
                type: '',
                status: ''
            },
            tableData: [{
                id: "001",
                name: '上传模版',
                type: '交互型',
                status: '已上架',
                date: '2016-05-03',
                author: '王小虎'
            }]
        };
    },
    methods: {
        onSubmit() {

        },
        deleteRow() {

        },
        EditRow() {

        }
    }
}
</script>
<style lang="scss">
    .template{
        background: #fff;
        padding: 20px;
        border-radius: 10px;
        .cell{
            .el-button--text{
                color: #f69225;
            }
            .el-button:hover{
                background-color: transparent;
                border-color:transparent;
            }
            .el-button:active{
                background-color: transparent;
                border-color: transparent;
            }
            .el-button:focus{
                background-color: transparent;
                border-color: transparent;
            }
            .el-button:hover{
                background-color: transparent;
                border-color: transparent;
            }
        }
    }
</style>