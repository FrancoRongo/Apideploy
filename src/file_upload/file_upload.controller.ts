import { Controller , FileTypeValidator, MaxFileSizeValidator, Param, ParseFilePipe, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploadService } from './file_upload.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiTags , ApiBody, ApiConsumes} from '@nestjs/swagger';
import { Role } from 'src/auth/roles.enum';
import { Roles } from 'src/decorators/roles.decorator';

@Controller('files')
@ApiTags("Upload Image")
export class FileUploadController {
    constructor(private readonly fileUploadServices: FileUploadService){}

    @Post('uploadImage/:id')
    @UseGuards(AuthGuard)
    @Roles(Role.Admin)
    @UseInterceptors(FileInterceptor('file'))
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: 'Imagen a subir',
        type: 'object',
    })
    uploadImage(
        @Param('id') productId: string,
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                    new MaxFileSizeValidator({
                        maxSize: 200000,
                        message: 'Exceeds the maximum allowed'
                    }),
                    new FileTypeValidator({
                        fileType:/(jpg|jpeg|png|webp|svg|gif)/
                    })
                ]
            })
        ) file: Express.Multer.File,
    ){
        return this.fileUploadServices.uploadImage(file,productId)
    }
}
